import { WorkoutPreviewCard } from "#/components/workout-preview-card";
import type { Workouts } from "#/types";

export function WorkoutDashboard({ workouts }: { workouts: Workouts }) {
  return (
    <div className="p-3 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col justify-between gap-6 border-b border-zinc-800 pb-8 md:flex-row md:items-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Workouts</h1>
          <p className="mt-2 text-zinc-400">
            Select your experience level to customize sets, reps, and tips.
          </p>
        </header>

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutPreviewCard key={workout.id} workout={workout} />
          ))}
        </main>
      </div>
    </div>
  );
}
