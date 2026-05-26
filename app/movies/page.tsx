import { repository } from "@/lib/repository";
import { ContentCard } from "@/components/ContentCard";

export default async function MoviesPage() {
  const all = await repository.getAll();
  const movies = all.filter((c) => c.type === "movie");

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-24 md:px-10">
      <h1 className="mb-8 text-3xl font-bold text-white">Movies</h1>
      <div className="flex flex-wrap gap-4">
        {movies.map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </main>
  );
}