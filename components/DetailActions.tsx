"use client";
import { useState } from "react";
import { Play, Plus, Check } from "lucide-react";
import { useMyList } from "@/context/MyListProvider";
import { TrailerModal } from "./TrailerModal";

export function DetailActions({
  id,
  title,
  trailerUrl,
}: {
  id: number;
  title: string;
  trailerUrl?: string;
}) {
  const list = useMyList();
  const inList = list.has(id);
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <>
      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={() => trailerUrl && setTrailerOpen(true)}
          disabled={!trailerUrl}
          className="flex items-center gap-2 rounded bg-white px-6 py-2 font-semibold text-black hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Play size={20} className="fill-black" />
          Play
        </button>
        <button
          onClick={() => {
            if (inList) list.remove(id);
            else list.add(id);
          }}
          className="flex items-center gap-2 rounded bg-neutral-700/80 px-6 py-2 font-semibold hover:bg-neutral-600"
        >
          {inList ? <Check size={20} /> : <Plus size={20} />}
          {inList ? "In My List" : "My List"}
        </button>
      </div>

      {trailerOpen && trailerUrl && (
        <TrailerModal
          title={title}
          trailerUrl={trailerUrl}
          onClose={() => setTrailerOpen(false)}
        />
      )}
    </>
  );
}
