import { useCallback, useEffect, useRef, useState } from "react";

import type { StoryCard } from "#/types";
import { AnimatePresence, motion, useMotionValue, useTransform } from "motion/react";

interface StoryViewerProps {
  story: StoryCard;
  onClose?: () => void;
  onComplete?: () => void;
}

const DEFAULT_DURATION = 5000;

export function StoryViewer({ story, onClose, onComplete }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLandscapeVideo, setIsLandscapeVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentItem = story.items[currentIndex];
  const duration = currentItem.duration ?? DEFAULT_DURATION;

  const dragY = useMotionValue(0);
  const backdropOpacity = useTransform(dragY, [0, 300], [1, 0]);

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const { videoWidth, videoHeight } = videoRef.current;
    setIsLandscapeVideo(videoWidth > videoHeight);
  };

  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleNext = useCallback(() => {
    if (currentIndex < story.items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onComplete?.();
    }
  }, [currentIndex, story.items.length, onComplete]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    setIsLandscapeVideo(false);
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused || currentItem.type === "video") return;

    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, duration, handleNext, currentItem.type]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isPaused) {
      videoRef.current.pause();
    } else {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;

      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [isPaused, currentIndex]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex touch-none items-center justify-center bg-black select-none"
      style={{ backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})` }}>
      <motion.div
        className="relative h-full max-h-225 w-full max-w-md overflow-hidden bg-zinc-900 md:rounded-2xl"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        style={{ y: dragY }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 150) {
            onClose?.();
          }
        }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center bg-black">
            {currentItem.type === "image" ? (
              <img src={currentItem.url} alt="" className="h-full w-full object-cover" />
            ) : (
              <video
                ref={videoRef}
                src={currentItem.url}
                className={
                  isLandscapeVideo
                    ? "aspect-video max-h-full w-full object-contain"
                    : "h-full w-full object-cover"
                }
                playsInline
                autoPlay
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleVideoTimeUpdate}
                onEnded={handleNext}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex flex-col gap-3 bg-linear-to-b from-black/70 to-transparent p-4 pt-3">
          <div className="flex w-full gap-1.5">
            {story.items.map((_, idx) => {
              let itemProgress = 0;
              if (idx < currentIndex) itemProgress = 100;
              else if (idx === currentIndex) itemProgress = progress;

              return (
                <div
                  key={idx}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/30 backdrop-blur-sm">
                  <div
                    className="h-full bg-white transition-all duration-75 ease-linear"
                    style={{ width: `${itemProgress}%` }}
                  />
                </div>
              );
            })}
          </div>

          <div className="pointer-events-auto flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={story.user.avatar}
                alt={story.user.name}
                className="size-8 rounded-full border border-white/20 object-cover"
              />
              <span className="text-sm font-semibold text-white drop-shadow">
                {story.user.name}
              </span>
            </div>
            {onClose && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="cursor-pointer p-2 text-lg leading-none text-white/80 hover:text-white"
                aria-label="Close story">
                ✕
              </button>
            )}
          </div>
        </div>

        <div
          className="absolute inset-0 z-20 flex"
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}>
          <div
            className="h-full w-1/3"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          />
          <div
            className="h-full w-2/3"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
