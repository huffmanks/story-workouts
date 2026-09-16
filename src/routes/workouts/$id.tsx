import { useState } from "react";

import { ExerciseCard } from "#/components/exercise-card";
import { LevelToggle } from "#/components/level-toggle";
import { workouts } from "#/data/workouts";
import { CATEGORY_COLORS } from "#/lib/constants";
import type { Level, Workout } from "#/types";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/workouts/$id")({
  component: RouteComponent,
  loader: ({ params }) => {
    const workout = workouts.find((w) => String(w.id) === params.id);
    if (!workout) throw notFound();
    return workout;
  },
});

function RouteComponent() {
  const workout: Workout = Route.useLoaderData();
  const [level, setLevel] = useState<Level>("beginner");

  return (
    <div className="p-3 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="space-y-6 border-b border-zinc-800 pb-8">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-200">
            ← Back to Workouts
          </Link>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold tracking-wider uppercase ${
                    CATEGORY_COLORS[workout.category]
                  }`}>
                  {workout.category}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
                {workout.title}
              </h1>
              <p className="mt-2 text-zinc-400">{workout.description}</p>
            </div>
            <LevelToggle level={level} onChange={setLevel} />
          </div>
        </header>

        <main className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {workout.exercises
            .sort((a, b) => a.order - b.order)
            .map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} level={level} />
            ))}
        </main>
      </div>
    </div>
  );
}
