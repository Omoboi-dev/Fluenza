"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChallengeIcon, ClothIcon, MeIcon } from "./Icons";

const tabs = [
  { href: "/learn", label: "Learn", Icon: ClothIcon },
  { href: "/chat", label: "Chat", Icon: MeIcon },
  { href: "/challenge", label: "Challenges", Icon: ChallengeIcon },
];

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      {/* Phone: one row of four, always reachable by thumb. */}
      <nav
        aria-label="Main"
        className="fixed inset-x-0 bottom-0 z-20 border-t border-mist bg-paper pb-[env(safe-area-inset-bottom)] md:hidden"
      >
        <ul className="mx-auto flex max-w-[460px]">
          {tabs.map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors ${
                    active ? "text-woad" : "text-ink/45"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  {label}
                  <span
                    className={`h-1 w-1 rounded-full ${
                      active ? "bg-marigold" : "bg-transparent"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Desktop: the same four, turned on their side. */}
      <nav
        aria-label="Main"
        className="fixed inset-y-0 left-0 z-20 hidden w-56 flex-col border-r border-mist bg-paper px-4 py-6 md:flex"
      >
        <Link href="/" className="mb-8 flex items-center gap-2.5 px-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold text-ink shadow-sm transition-transform group-hover:scale-105 active:scale-95">
            <span className="font-display text-xl font-black">F</span>
          </div>
          <span className="font-display text-xl font-extrabold tracking-tight text-ink">
            Fluenza
          </span>
        </Link>
        <ul className="flex flex-col gap-1">
          {tabs.map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-woad text-paper"
                      : "text-ink/60 hover:bg-chalk hover:text-ink"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
