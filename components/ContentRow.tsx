"use client";
import { useRef } from "react";
import { ContentCard } from "./ContentCard";
import type { CardContent } from "@/data/contents";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ContentRow({
  title,
  items,
}: {
  title: string;
  items: CardContent[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="group relative">
      <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-r bg-black/40 p-2 text-white opacity-0 transition group-hover:opacity-100"
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
        >
          {items.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-l bg-black/40 p-2 text-white opacity-0 transition group-hover:opacity-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}