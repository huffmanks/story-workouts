import type { Exercise, Level } from "#/types";

export function ExerciseCard({ exercise, level }: { exercise: Exercise; level: Level }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 backdrop-blur-sm">
      <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800/80 bg-zinc-950">
        {exercise.videoUrl !== "" && (
          <video
            src={exercise.videoUrl}
            poster={exercise.imageUrl}
            preload="metadata"
            controls
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="space-y-6 p-6">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Exercise {exercise.order + 1}
            </span>
          </div>
          <h3 className="text-xl font-bold text-zinc-100">{exercise.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">{exercise.description}</p>
        </div>

        <div className="rounded-xl border border-zinc-800/50 bg-zinc-950/50 p-4">
          <span className="mb-1 block text-xs font-semibold tracking-wider text-indigo-400 uppercase">
            Protocol
          </span>
          <p className="text-sm font-medium text-zinc-200">{exercise.protocol[level]}</p>
        </div>

        {exercise.benefits.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Benefits
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exercise.benefits.map((benefit, i) => (
                <span
                  key={i}
                  className="rounded-md border border-zinc-700/30 bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-300">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        )}

        {exercise.tips[level].length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Tips
            </h4>
            <ul className="space-y-1.5">
              {exercise.tips[level].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                  <span className="text-sm leading-none text-indigo-400">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
