import type { Level } from "#/types";

export function LevelToggle({
  level,
  onChange,
}: {
  level: Level;
  onChange: (level: Level) => void;
}) {
  const levels: Level[] = ["beginner", "intermediate", "advanced"];

  return (
    <div className="inline-flex rounded-xl border border-zinc-800 bg-zinc-900 p-1">
      {levels.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all duration-200 ${
            level === item
              ? "border border-zinc-700/50 bg-zinc-800 text-zinc-100 shadow-sm"
              : "text-zinc-400 hover:text-zinc-200"
          }`}>
          {item}
        </button>
      ))}
    </div>
  );
}
