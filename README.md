# Gist

Learn a language in three minutes a day. Working name, easy to change.

## Run it

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000. The app redirects to `/learn`.

No database is needed yet. Every screen renders from `src/lib/content/courses.ts`.

## What is here (phase 0)

The shell and the design system, with real content in place of filler.

```
src/
  app/
    (app)/            the four tabs, sharing one layout
      learn/          course map, the home screen
      challenge/
      ranks/
      me/             profile and the rewards balance
    layout.tsx        fonts and metadata
    globals.css       design tokens
  components/
    Nav.tsx           bottom tabs on phone, left rail on desktop
    TopStrip.tsx      language, streak, hearts
    CourseMap.tsx     the woven course map
    Icons.tsx
  lib/content/
    types.ts          Language > Course > Unit > Lesson > Exercise
    courses.ts        placeholder seed content
  db/
    schema.ts         full Drizzle schema for every phase
    index.ts          client, reads DATABASE_URL
```

## Design

The look comes from adire, the Yoruba indigo resist dye cloth. Deep indigo and
chalk rather than the app white and lime everyone else uses.

The course map is the one loud element. Each unit is a woven band with a bound
selvage edge, and each lesson is a block in it: undyed while locked, marigold
for the one you are on, dyed indigo with a resist pattern once finished. You can
see how far you have got from across the room.

Everything else stays quiet so that reads.

Tokens live in `globals.css`. Colors are `ink`, `woad`, `dye`, `mist`, `chalk`,
`paper`, `marigold`, `coral`, `leaf`. Fonts are `font-display` (Bricolage
Grotesque), `font-body` (Figtree) and `font-mono` (DM Mono).

## Rewards

Rewards accrue in `reward_ledger` as plain numbers, so finishing a lesson is
instant and free. A wallet is created quietly at signup and USDC only moves
onchain when someone taps Cash out. The learner never sees an address or a
recovery phrase. The Me screen is the entire crypto surface.

## Next

1. Content generation script, one course end to end
2. The lesson player, exercise kinds one to four, XP, hearts, streak
3. Install to home screen, offline lessons, streak reminder
4. Auth, database, wallet creation, cash out
5. Challenges and leagues on real data

## Notes

- The Yoruba content in `courses.ts` was written by hand as a placeholder and
  needs a native speaker to check it before anyone learns from it.
- The language picker, Play now, and the settings rows are not wired up yet.
