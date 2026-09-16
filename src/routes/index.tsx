import { WorkoutDashboard } from "#/components/workout-dashboard";
import { workouts } from "#/data/workouts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <WorkoutDashboard workouts={workouts} />;
}
