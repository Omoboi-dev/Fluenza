import Link from "next/link";
import {
  Type,
  Hash,
  BookOpen,
  Zap,
  HelpCircle,
  Users,
  UtensilsCrossed,
  MapPin,
  MessageCircle,
  Lock,
} from "lucide-react";
import { getModulesByLevel } from "@/lib/content/modules";

const iconMap: Record<string, React.ElementType> = {
  type: Type,
  hash: Hash,
  "book-open": BookOpen,
  zap: Zap,
  "help-circle": HelpCircle,
  users: Users,
  utensils: UtensilsCrossed,
  "map-pin": MapPin,
  "hand-wave": MessageCircle,
};

export default function LearnPage() {
  const levels = getModulesByLevel();

  return (
    <div className="mx-auto max-w-2xl py-6 px-4">
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-extrabold text-ink">
          Your German Journey
        </h1>
        <p className="mt-3 text-ink/60 text-lg">
          From zero to A1 certification. One step at a time.
        </p>
      </div>

      {/* Levels */}
      <div className="space-y-10">
        {levels.map(({ level, label, modules }) => (
          <section key={level}>
            {/* Level Header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper text-xs font-bold">
                {level}
              </span>
              <h2 className="font-display text-xl font-bold text-ink">
                {label}
              </h2>
              <div className="flex-1 h-px bg-mist" />
            </div>

            {/* Module Cards */}
            <div className="grid gap-4">
              {modules.map((mod) => {
                const Icon = iconMap[mod.icon] || BookOpen;
                return (
                  <Link
                    key={mod.id}
                    href={`/learn/${mod.id}`}
                    className="group relative flex items-center gap-5 rounded-2xl bg-paper p-5 shadow-sm border border-mist transition-all hover:shadow-md hover:border-ink/15 active:scale-[0.99]"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${mod.color} text-paper transition-transform group-hover:scale-110`}
                    >
                      <Icon size={28} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-bold">
                        {mod.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink/60 line-clamp-1">
                        {mod.description}
                      </p>
                      <p className="mt-2 text-xs text-ink/40">
                        {mod.lessons.length}{" "}
                        {mod.lessons.length === 1 ? "lesson" : "lessons"} ·{" "}
                        {mod.lessons.reduce(
                          (sum, l) => sum + l.items.length,
                          0
                        )}{" "}
                        cards
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Chat CTA */}
      <div className="mt-12 rounded-3xl bg-ink p-8 text-center text-paper shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative z-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-marigold text-ink mb-4 shadow-inner">
            <MessageCircle size={32} />
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">
            Ready to practice?
          </h2>
          <p className="text-paper/70 mb-6 max-w-sm mx-auto">
            Test your knowledge by having a real conversation with your German
            AI tutor.
          </p>
          <Link
            href="/chat"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-marigold px-8 font-bold text-ink transition-transform hover:scale-105 active:scale-95"
          >
            Start Chatting
          </Link>
        </div>
      </div>
    </div>
  );
}
