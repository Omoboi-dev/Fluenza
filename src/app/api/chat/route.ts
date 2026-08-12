import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize Gemini API
const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(req: Request) {
  if (!genAI) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not set in environment variables." },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    // Get the latest user message
    const latestMessage = messages[messages.length - 1];

    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
      systemInstruction: `You are an expert, encouraging German language tutor. 
      Your goal is to help the user learn German from absolute beginner to fluent. 
      You should correct their mistakes gently, explain grammar concepts clearly, and provide examples.
      Keep your responses relatively concise so they are easy to read in a chat interface.
      
      CRITICAL FORMATTING RULES:
      1. NEVER use asterisks (*) for formatting (no bold, no italics using asterisks). You can use quotes if needed.
      2. Whenever you write ANY German word, phrase, or sentence, you MUST wrap it strictly in [de] and [/de] tags. 
         Example: The German word for apple is [de]Apfel[/de].
         Example 2: [de]Guten Tag! Wie geht es dir?[/de]`,
    });

    // Format previous messages for Gemini
    // Ensure history starts with a user message to satisfy Gemini requirements
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // If the first message in history is a model message, we need to strip leading model messages.
    // Gemini requires the history to start with a 'user' message.
    const firstUserIndex = history.findIndex((msg: any) => msg.role === "user");
    if (firstUserIndex !== -1) {
      history = history.slice(firstUserIndex);
    } else {
      history = []; // No user messages in history yet
    }

    const chat = model.startChat({
      history,
    });

    const result = await chat.sendMessage(latestMessage.content);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: "assistant", content: text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate response." },
      { status: 500 }
    );
  }
}
