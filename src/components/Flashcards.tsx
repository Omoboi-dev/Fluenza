"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import type { FlashcardItem } from "@/lib/content/modules";
import { cn } from "@/lib/utils";

function speakGerman(text: string) {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "de-DE";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }
}

function SingleCard({
  item,
  isFlipped,
  onFlip,
}: {
  item: FlashcardItem;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div
      className="relative w-full cursor-pointer perspective-[800px]"
      style={{ minHeight: 260 }}
      onClick={onFlip}
    >
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-ink p-8 text-paper shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/40 mb-4">
            Tap to reveal
          </p>
          <h2 className="font-display text-4xl font-extrabold text-center">
            {item.front}
          </h2>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-marigold p-8 text-ink shadow-xl"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h2 className="font-display text-3xl font-extrabold text-center">
            {item.back}
          </h2>
          {item.pronunciation && (
            <p className="mt-2 text-ink/60 text-sm font-mono">
              /{item.pronunciation}/
            </p>
          )}
          {item.example && (
            <div className="mt-4 rounded-xl bg-ink/10 px-4 py-2 text-center">
              <p className="font-bold">{item.example}</p>
              {item.exampleTranslation && (
                <p className="text-xs text-ink/60 mt-0.5">
                  {item.exampleTranslation}
                </p>
              )}
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              speakGerman(item.back);
            }}
            className="mt-5 flex items-center gap-2 rounded-full bg-ink/15 px-4 py-2 text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            <Volume2 size={16} />
            Hear it
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function Flashcards({ items }: { items: FlashcardItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentItem = items[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex((i) => i + 1), 100);
    }
  }, [currentIndex, items.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex((i) => i - 1), 100);
    }
  }, [currentIndex]);

  const resetCards = useCallback(() => {
    setIsFlipped(false);
    setCurrentIndex(0);
  }, []);

  const progress = ((currentIndex + 1) / items.length) * 100;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex items-center justify-between text-sm text-ink/50 mb-2">
          <span>
            Card {currentIndex + 1} of {items.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-mist">
          <motion.div
            className="h-full rounded-full bg-marigold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="w-full"
        >
          <SingleCard
            item={currentItem}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped((f) => !f)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex w-full items-center justify-between gap-3">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full border border-mist transition-all",
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-chalk hover:border-ink/20 active:scale-95"
          )}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={resetCards}
          className="flex items-center gap-2 rounded-full border border-mist px-5 py-2.5 text-sm font-semibold transition-all hover:bg-chalk hover:border-ink/20 active:scale-95"
        >
          <RotateCcw size={14} />
          Start Over
        </button>

        <button
          onClick={goNext}
          disabled={currentIndex === items.length - 1}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full border border-mist transition-all",
            currentIndex === items.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-chalk hover:border-ink/20 active:scale-95"
          )}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Completion message */}
      {currentIndex === items.length - 1 && isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-2xl bg-leaf/10 border border-leaf/30 px-6 py-4 text-center"
        >
          <p className="font-display font-bold text-leaf text-lg">
            Great job! You finished this lesson!
          </p>
          <p className="mt-1 text-sm text-ink/60">
            Try the "Start Over" button to review, or head back and pick the
            next lesson.
          </p>
        </motion.div>
      )}
    </div>
  );
}
