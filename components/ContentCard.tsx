"use client";
import Link from "next/link";
import { Plus, Check, Star } from "lucide-react";
import { type MouseEvent } from "react";
import { useMyList } from "@/context/MyListProvider";
import type { CardContent } from "@/data/contents";

export function ContentCard({ content }: { content: CardContent }) {
  const list = useMyList();
  const inList = list.has(content.id);

  const toggle = (e: MouseEvent) => {
    e.preventDefault(); // stop the card's link from navigating when the button is clicked
    if (inList) list.remove(content.id);
    else list.add(content.id);
  };

  return (
    <Link
      href={`/${content.type}/${content.id}`}
      className="group relative block w-44 shrink-0 overflow-hidden rounded-md bg-neutral-900 transition-transform duration-200 hover:scale-105"
    >
      <img src={content.thumbnail} alt={content.title} className="h-64 w-full object-cover" />
      <button
        onClick={toggle}
        aria-label={inList ? "Remove from My List" : "Add to My List"}
        className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/80"
      >
        {inList ? <Check size={18} /> : <Plus size={18} />}
      </button>
      <div className="p-2">
        <h3 className="truncate text-sm font-semibold text-white">{content.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
          <span className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-500 text-yellow-500" />
            {content.rating}
          </span>
          <span>{content.year}</span>
          <span className="truncate">{content.genre[0]}</span>
        </div>
      </div>
    </Link>
  );
}
