"use client";
import { Play, Plus, Check } from "lucide-react";
import { useMyList } from "@/context/MyListProvider";

export function DetailActions({ id }: { id: number }) {
  const list = useMyList();
  const inList = list.has(id);

  return (
    <div className="mt-5 flex items-center gap-3">
      <button className="flex items-center gap-2 rounded bg-white px-6 py-2 font-semibold text-black hover:bg-neutral-200">
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
  );
}