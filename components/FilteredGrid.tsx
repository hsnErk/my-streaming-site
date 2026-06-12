"use client";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { ContentCard } from "./ContentCard";
import type { CardContent } from "@/data/contents";

// Client-side genre/year filtering for the Movies and Series listing pages.
export function FilteredGrid({ items }: { items: CardContent[] }) {
  const [genre, setGenre] = useState("all");
  const [year, setYear] = useState("all");

  const genres = useMemo(
    () => [...new Set(items.flatMap((i) => i.genre))].sort(),
    [items]
  );
  const years = useMemo(
    () => [...new Set(items.map((i) => i.year))].sort((a, b) => b - a),
    [items]
  );

  const filtered = items.filter(
    (i) =>
      (genre === "all" || i.genre.includes(genre)) &&
      (year === "all" || i.year === Number(year))
  );

  const selectClass =
    "rounded bg-neutral-800 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-red-600";

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center gap-4 text-neutral-300">
        <SlidersHorizontal size={18} aria-hidden="true" />
        <label className="flex items-center gap-2 text-sm">
          Genre
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className={selectClass}
          >
            <option value="all">All</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          Year
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={selectClass}
          >
            <option value="all">All</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </label>
        <span className="text-xs text-neutral-500">
          {filtered.length} {filtered.length === 1 ? "title" : "titles"}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className="text-neutral-400">
          No titles match these filters. Try a different combination.
        </p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {filtered.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </>
  );
}
