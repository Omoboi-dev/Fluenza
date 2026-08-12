"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mic, Volume2, Square } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function Chat({ initialContext }: { initialContext?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hallo! I am Fluenza, your personal German AI tutor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [contextSent, setContextSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-send context from lesson practice
  useEffect(() => {
    if (initialContext && !contextSent) {
      setContextSent(true);
      const contextMessage: Message = {
        id: "context",
        role: "user",
        content: initialContext,
      };
      setMessages((prev) => [...prev, contextMessage]);
      setIsLoading(true);

      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [contextMessage] }),
      })
        .then((res) => res.json())
        .then((data) => {
          setMessages((prev) => [
            // Replace: remove the context msg and the welcome, show only AI response
            {
              id: "welcome-context",
              role: "assistant",
              content: data.content,
            },
          ]);
          speak(data.content);
        })
        .catch(() => {
          // silently fail, user can still type
        })
        .finally(() => setIsLoading(false));
    }
  }, [initialContext, contextSent]);

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      setIsSpeaking(true);
      // Basic text cleanup for reading: remove markdown but keep punctuation for natural pauses.
      // We replace dashes and hashes with spaces so it doesn't say "dash" or "hash", but words like "step-by-step" are still read correctly as "step by step".
      const cleanText = text.replace(/[*_~`]/g, "").replace(/[-#]/g, " ");
      
      // Parse [de]...[/de] tags and split into segments
      const segments: { lang: string; text: string }[] = [];
      const regex = /\[de\](.*?)\[\/de\]/g;
      let lastIndex = 0;
      let match;
      
      while ((match = regex.exec(cleanText)) !== null) {
        // Add preceding English text if any
        if (match.index > lastIndex) {
          segments.push({ lang: "en-US", text: cleanText.substring(lastIndex, match.index) });
        }
        // Add German text
        segments.push({ lang: "de-DE", text: match[1] });
        lastIndex = regex.lastIndex;
      }
      
      // Add any remaining English text
      if (lastIndex < cleanText.length) {
        segments.push({ lang: "en-US", text: cleanText.substring(lastIndex) });
      }

      // If no tags were found, fallback to the heuristic
      if (segments.length === 0) {
        const englishScore = (cleanText.match(/\b(the|is|to|and|you|it|in|that|of|for|with|a)\b/gi) || []).length;
        const germanScore = (cleanText.match(/\b(der|die|das|und|ist|ich|du|er|sie|es|wir|ihr|zu|mit|von|ein|eine)\b/gi) || []).length;
        segments.push({ lang: englishScore > germanScore ? "en-US" : "de-DE", text: cleanText });
      }

      // Merge standalone punctuation segments into the previous segment so they act as pauses
      // rather than being read aloud as the word "comma" or "question mark".
      const mergedSegments: { lang: string; text: string }[] = [];
      segments.forEach((segment) => {
        if (/^[\s.,?!;:-]+$/.test(segment.text) && mergedSegments.length > 0) {
          mergedSegments[mergedSegments.length - 1].text += segment.text;
        } else {
          mergedSegments.push(segment);
        }
      });

      // Stop any current speech
      window.speechSynthesis.cancel();
      
      // Queue up utterances for each segment
      mergedSegments.forEach((segment, index) => {
        if (!segment.text.trim()) return;
        const utterance = new SpeechSynthesisUtterance(segment.text);
        utterance.lang = segment.lang;
        
        // Stop spinning when the last segment finishes
        if (index === mergedSegments.length - 1) {
          utterance.onend = () => setIsSpeaking(false);
          utterance.onerror = () => setIsSpeaking(false);
        }

        window.speechSynthesis.speak(utterance);
      });
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.content,
        },
      ]);
      
      // Auto-play the AI's response
      speak(data.content);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-80px)] flex-col bg-ink text-paper rounded-2xl overflow-hidden border border-paper/10 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-paper/10 bg-ink/50 p-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-marigold text-ink font-bold">
            AI
          </div>
          <div>
            <h2 className="font-display font-bold">Fluenza AI</h2>
            <p className="text-xs text-paper/60">Ready to chat</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex max-w-[85%] flex-col gap-2",
                msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
              )}
            >
              <div
                className={cn(
                  "rounded-2xl px-4 py-3 shadow-sm",
                  msg.role === "user"
                    ? "bg-marigold text-ink rounded-tr-sm"
                    : "bg-paper/10 text-paper rounded-tl-sm"
                )}
              >
                <p className="whitespace-pre-wrap leading-relaxed">
                  {msg.content.replace(/\[\/?de\]/g, "")}
                </p>
              </div>
              
              {msg.role === "assistant" && msg.content !== "Sorry, I encountered an error. Please try again." && (
                <button
                  onClick={() => isSpeaking ? stopSpeech() : speak(msg.content)}
                  className="flex items-center gap-1.5 text-xs text-paper/50 hover:text-marigold transition-colors"
                >
                  {isSpeaking ? (
                    <>
                      <Square size={12} fill="currentColor" />
                      <span>Stop</span>
                    </>
                  ) : (
                    <>
                      <Volume2 size={14} />
                      <span>Listen</span>
                    </>
                  )}
                </button>
              )}
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-paper/50 p-2"
            >
              <div className="h-2 w-2 animate-bounce rounded-full bg-marigold [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-marigold [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-marigold"></div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSend}
        className="border-t border-paper/10 bg-ink/50 p-4 backdrop-blur-md"
      >
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message in German or English..."
            className="w-full rounded-full border border-paper/20 bg-paper/5 py-3 pl-5 pr-24 text-paper placeholder:text-paper/40 focus:border-marigold focus:outline-none focus:ring-1 focus:ring-marigold transition-all"
            disabled={isLoading}
          />
          <div className="absolute right-2 flex items-center gap-1">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-paper/50 hover:bg-paper/10 hover:text-paper transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              <Mic size={18} />
            </button>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-marigold text-ink transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send size={16} className="ml-0.5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
