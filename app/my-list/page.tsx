"use client";

import { useEffect, useState } from "react";
import { useMyList } from "@/context/MyListProvider";
import { repository } from "@/lib/repository";
import { ContentCard } from "@/components/ContentCard";
import type { CardContent } from "@/data/contents";
import { Loader2, Film } from "lucide-react";

export default function MyListPage() {
  const { ids } = useMyList();
  const [favoriteItems, setFavoriteItems] = useState<CardContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        // Fetch the lean card objects from our repository layer
        const allContent = await repository.getAll();
        
        // Filter out everything except the IDs saved in our layout state
        const matchedItems = allContent.filter((item) => ids.includes(item.id));
        setFavoriteItems(matchedItems);
      } catch (error) {
        console.error("Failed to load favorites list:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [ids]); // Re-runs automatically whenever an ID is added or removed!

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-24 md:px-10">
      <h1 className="mb-8 text-3xl font-bold text-white">My List</h1>

      {loading && (
        <div className="flex items-center gap-2 text-neutral-400">
          <Loader2 size={20} className="animate-spin" />
          <span>Loading your list...</span>
        </div>
      )}

      {!loading && favoriteItems.length === 0 && (
        <div className="mt-12 flex flex-col items-center justify-center text-center text-neutral-500">
          <Film size={48} className="mb-4 text-neutral-600" />
          <p className="text-lg font-medium">Your list is empty.</p>
          <p className="mt-1 text-sm">Explore the home page to add your favorite movies and series.</p>
        </div>
      )}

      {!loading && favoriteItems.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {favoriteItems.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      )}
    </main>
  );
}