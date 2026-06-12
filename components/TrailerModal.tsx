"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

export function TrailerModal({
  title,
  trailerUrl,
  onClose,
}: {
  title: string;
  trailerUrl: string;
  onClose: () => void;
}) {
  // Close on Escape and lock body scroll while the modal is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const src = trailerUrl.includes("?")
    ? `${trailerUrl}&autoplay=1`
    : `${trailerUrl}?autoplay=1`;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} trailer`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close trailer"
          className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
        >
          <X size={20} />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={src}
            title={`${title} trailer`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
