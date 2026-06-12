"use client";

import { useState, useEffect, type FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { repository } from "@/lib/repository";
import { ContentCard } from "@/components/ContentCard";
import { SkeletonGrid } from "@/components/SkeletonCard";
import type { CardContent } from "@/data/contents";
import { Search as SearchIcon } from "lucide-react";

// --------------------------------------------------------
// 1. Client component that uses useSearchParams
// --------------------------------------------------------
function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<CardContent[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }
    setLoading(true);
    setSearched(true);
    try {
      const data = await repository.search(searchTerm);
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  // If the URL has a ?q= parameter, automatically search on mount
  useEffect(() => {
    if (initialQuery) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sync the results with the ?q= URL parameter
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.replace(`/search?${params.toString()}`);
    performSearch(query);
  };

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-24 md:px-10">
      <h1 className="mb-8 text-3xl font-bold text-white">Search</h1>

      <form onSubmit={handleSubmit} className="mb-8 flex max-w-lg gap-3">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Titles, genres, actors..."
            className="w-full rounded bg-neutral-800 py-2 pl-10 pr-4 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <SkeletonGrid count={8} />}

      {!loading && searched && results.length === 0 && (
        <p className="text-neutral-400">No results found. Try a different search term.</p>
      )}

      {!loading && results.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {results.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      )}

      {!searched && !loading && (
        <p className="text-neutral-500">Enter a search term to find movies and series.</p>
      )}
    </main>
  );
}

// --------------------------------------------------------
// 2. Page wrapper with Suspense boundary
// --------------------------------------------------------
export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-neutral-950 px-4 py-24 md:px-10">
          <div className="mb-8 h-9 w-40 animate-pulse rounded bg-neutral-800" />
          <SkeletonGrid count={8} />
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
