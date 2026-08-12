"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getModuleById } from "@/lib/content/modules";
import { Flashcards } from "@/components/Flashcards";
import { notFound } from "next/navigation";

export default function ModulePage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const { moduleId } = use(params);
  const mod = getModuleById(moduleId);

  if (!mod) {
    notFound();
  }

  return <ModuleContent mod={mod} />;
}

function ModuleContent({ mod }: { mod: NonNullable<ReturnType<typeof getModuleById>> }) {
  const [activeLessonId, setActiveLessonId] = useState<string | null>(
    mod.lessons[0]?.id ?? null
  );

  const activeLesson = mod.lessons.find((l) => l.id === activeLessonId);

  return (
    <div className="mx-auto max-w-2xl py-6 px-4">
      {/* Back link */}
      <Link
        href="/learn"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Learn
      </Link>

      {/* Module Header */}
      <div className="mb-8">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${mod.color} text-paper mb-4`}
        >
          <span className="text-2xl font-bold">
            {mod.title.charAt(0)}
          </span>
        </div>
        <h1 className="font-display text-3xl font-extrabold text-ink">
          {mod.title}
        </h1>
        <p className="mt-2 text-ink/60">{mod.description}</p>
      </div>

      {/* Lesson Accordion */}
      <div className="space-y-3">
        {mod.lessons.map((lesson) => {
          const isActive = lesson.id === activeLessonId;
          return (
            <div
              key={lesson.id}
              className="rounded-2xl border border-mist bg-paper overflow-hidden shadow-sm"
            >
              {/* Lesson Header */}
              <button
                onClick={() =>
                  setActiveLessonId(isActive ? null : lesson.id)
                }
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-chalk/50"
              >
                <div>
                  <h3 className="font-display font-bold text-lg">
                    {lesson.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink/50">
                    {lesson.description} · {lesson.items.length} cards
                  </p>
                </div>
                {isActive ? (
                  <ChevronUp size={20} className="text-ink/40 shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-ink/40 shrink-0" />
                )}
              </button>

              {/* Flashcard Area */}
              <AnimatePresence initial={false}>
                {isActive && activeLesson && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-mist p-5">
                      <Flashcards items={activeLesson.items} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Practice with AI */}
      <div className="mt-10 rounded-3xl bg-ink p-8 text-center text-paper shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.08),transparent)]" />
        <div className="relative z-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-marigold text-ink mb-4">
            <MessageCircle size={28} />
          </div>
          <h2 className="font-display text-xl font-bold mb-2">
            Practice with AI
          </h2>
          <p className="text-paper/60 mb-5 max-w-sm mx-auto text-sm">
            Finished the cards? Put your knowledge to the test with a real
            conversation.
          </p>
          <Link
            href={`/chat?context=${encodeURIComponent(mod.aiPrompt)}`}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-marigold px-6 font-bold text-ink text-sm transition-transform hover:scale-105 active:scale-95"
          >
            Chat about {mod.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
