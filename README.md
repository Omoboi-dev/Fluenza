# Fluenza 🇩🇪

Fluenza is an interactive, AI-powered German language learning application built to take absolute beginners from zero to A1 fluency. 

By combining a structured curriculum with a conversational AI Brain (powered by Google's Gemini), Fluenza offers a modern, highly engaging way to master the German language without the traditional textbook grind.

## ✨ Features

- **📚 Zero-to-A1 Curriculum**: A carefully crafted syllabus covering the absolute basics (Alphabet, Numbers, Greetings), core mechanics (Der/Die/Das, Verbs), and everyday vocabulary (Family, Food, Directions).
- **🃏 Interactive Flashcards**: Beautifully animated flashcards that flip to reveal translations and examples.
- **🗣️ Native Pronunciation (TTS)**: Integrated with the browser's Web Speech API. Click "Hear it" on any flashcard to hear the perfect native German pronunciation.
- **🤖 Practice with AI**: At the end of every lesson, you can instantly jump into a roleplay conversation with the Fluenza AI Tutor to practice exactly what you just learned.
- **🎙️ Seamless Voice Auto-Play**: The AI Tutor reads its responses out loud automatically, seamlessly switching between English and German voices mid-sentence for a flawless bilingual experience.
- **💅 Modern UX/UI**: Built with Framer Motion and Tailwind CSS for a premium, app-like feel with smooth transitions and glassmorphic elements.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **AI Brain**: [Google Gemini Pro API](https://aistudio.google.com/) (`@google/generative-ai`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Speech**: Native Browser Web Speech API (`SpeechSynthesis`)

## 🚀 Getting Started

### Prerequisites
1. Node.js (v18+)
2. pnpm (recommended) or npm
3. A free [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Omoboi-dev/Fluenza.git
   cd Fluenza
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to start learning German!

## 🗺️ Roadmap / Coming Soon
- **🎤 Speech Recognition**: Practice your own pronunciation using the microphone.
- **📊 Progress Tracking**: Database integration to track learned vocabulary and daily streaks.
- **🏆 Challenges Page**: Daily gamified challenges and quizzes.

## 📄 License
MIT License
