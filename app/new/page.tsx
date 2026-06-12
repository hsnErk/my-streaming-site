import { repository } from "@/lib/repository";
import { ContentCard } from "@/components/ContentCard";

// "Yeni Eklenenler" — newest titles first, sorted by release year.
export default async function NewAdditionsPage() {
  const all = await repository.getAll();
  const newest = [...all].sort((a, b) => b.year - a.year);

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-24 md:px-10">
      <h1 className="mb-8 text-3xl font-bold text-white">Yeni Eklenenler</h1>
      <div className="flex flex-wrap gap-4">
        {newest.map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </main>
  );
}
