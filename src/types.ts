export type StoryItem =
  | { type: "image"; url: string; duration?: number }
  | { type: "video"; url: string; duration?: number };

export type StoryCard = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  items: StoryItem[];
};

export type Workouts = Workout[];

export type Workout = {
  id: string;
  title: string;
  description: string;
  category: "strength" | "cardio" | "flexibility" | "calisthenics";
  exercises: Exercise[];
};

export type Exercise = {
  id: string;
  order: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  benefits: string[];
  protocol: Protocols;
  tips: Tips;
};

export type Protocols = {
  beginner: string;
  intermediate: string;
  advanced: string;
};

export type Tips = {
  beginner: string[];
  intermediate: string[];
  advanced: string[];
};

export type Level = "beginner" | "intermediate" | "advanced";
