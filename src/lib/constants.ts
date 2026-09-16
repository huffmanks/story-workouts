import type { Workout } from "#/types";

export const CATEGORY_COLORS: Record<Workout["category"], string> = {
  strength: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  cardio: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  flexibility: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  calisthenics: "bg-sky-500/10 text-sky-400 border-sky-500/20",
};
