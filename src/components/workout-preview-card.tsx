import { CATEGORY_COLORS } from "#/lib/constants";
import type { Workout } from "#/types";
import { Link } from "@tanstack/react-router";

export function WorkoutPreviewCard({ workout }: { workout: Workout }) {
  return (
    <Link
      to="/workouts/$id"
      params={{ id: workout.id }}
      className="group block rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-200 hover:border-zinc-700/80">
      <div className="mb-4 flex items-center justify-between gap-4">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${
            CATEGORY_COLORS[workout.category]
          }`}>
          {workout.category}
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
          {workout.exercises.length} {workout.exercises.length === 1 ? "exercise" : "exercises"} →
        </span>
      </div>
      <h3 className="text-xl font-bold text-zinc-100 transition-colors group-hover:text-indigo-400">
        {workout.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{workout.description}</p>
    </Link>
  );
}
