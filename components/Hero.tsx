// components/Hero.tsx
import { repository } from "@/lib/repository";
import { Play, Info } from "lucide-react";
import Link from "next/link";

export async function Hero() {
  // Get all cards to pick the first ID
  const all = await repository.getAll();
  const firstItem = all[0];
  if (!firstItem) return null;

  // Fetch the full rich Content object
  const featured = await repository.getById(firstItem.id);
  if (!featured) return null;

  return (
    <div className="relative h-[85vh] w-full bg-neutral-950">
      {/* Wide backdrop image, not the poster thumbnail */}
      <img
        src={featured.banner}
        alt={featured.title}
        className="h-full w-full object-cover"
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

      <div className="absolute bottom-0 left-0 max-w-xl p-6 md:p-12">
        <h1 className="text-4xl font-bold text-white md:text-6xl drop-shadow-md">
          {featured.title}
        </h1>
        <p className="mt-4 line-clamp-3 text-sm text-gray-300 md:text-base drop-shadow">
          {featured.description}
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href={`/${featured.type}/${featured.id}`}
            className="flex items-center gap-2 rounded bg-white px-6 py-2 font-semibold text-black hover:bg-neutral-200 transition"
          >
            <Play size={20} className="fill-black" /> Play
          </Link>
          <Link
            href={`/${featured.type}/${featured.id}`}
            className="flex items-center gap-2 rounded bg-neutral-500/30 px-6 py-2 font-semibold text-white hover:bg-neutral-500/50 transition backdrop-blur-sm"
          >
            <Info size={20} /> More Info
          </Link>
        </div>
      </div>
    </div>
  );
}
