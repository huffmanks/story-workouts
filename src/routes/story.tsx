import { StoryViewer } from "#/components/story-viewer";
import type { StoryCard } from "#/types";
import { createFileRoute } from "@tanstack/react-router";

const SAMPLE_STORY: StoryCard = {
  id: "1",
  user: {
    name: "Alex Rivera",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  },
  items: [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800&auto=format&fit=crop&q=80",
      duration: 4000,
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_01.mp4",
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_02.mp4",
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_03.mp4",
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_04.mp4",
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_05.mp4",
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_06.mp4",
    },
    {
      type: "video",
      url: "/videos/exercises-to-keep-you-young/exercise_07.mp4",
    },
  ],
};

export const Route = createFileRoute("/story")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = Route.useNavigate();

  return (
    <StoryViewer
      story={SAMPLE_STORY}
      onClose={() => navigate({ to: "/" })}
      onComplete={() => navigate({ to: "/" })}
    />
  );
}
