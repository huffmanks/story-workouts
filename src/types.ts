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
