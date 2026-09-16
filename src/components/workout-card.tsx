import { ExerciseCard } from "#/components/exercise-card";
import { CATEGORY_COLORS } from "#/lib/constants";
import type { Level, Workout } from "#/types";

export function WorkoutCard({ workout, level }: { workout: Workout; level: Level }) {
  return (
    <div className="space-y-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-3 sm:p-8">
      <div className="flex flex-col justify-between gap-4 border-b border-zinc-800/80 pb-6 sm:flex-row sm:items-center">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${
                CATEGORY_COLORS[workout.category]
              }`}>
              {workout.category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">{workout.title}</h2>
          <p className="mt-1 text-sm text-zinc-400 sm:text-base">{workout.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {workout.exercises
          .sort((a, b) => a.order - b.order)
          .map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} level={level} />
          ))}
      </div>
    </div>
  );
}
