import { repository } from "@/lib/repository";
import { Hero } from "@/components/Hero";
import { ContentRow } from "@/components/ContentRow";

export default async function HomePage() {
  const all = await repository.getAll();

  // Define categories: we'll group by a top genre, or by type.
  const byGenre = (genre: string) =>
    all.filter((c) => c.genre.includes(genre));

  const trending = all.filter((c) => c.rating >= 8.5).slice(0, 10);
  const action = byGenre("Action");
  const comedy = byGenre("Comedy");
  const drama = byGenre("Drama");
  const sciFi = byGenre("Sci-Fi");
  const horror = byGenre("Horror");

  return (
    <main className="bg-neutral-950 pb-10">
      <Hero />
      <div className="-mt-24 relative z-10 space-y-8 px-4 md:px-10">
        {trending.length > 0 && <ContentRow title="Trending Now" items={trending} />}
        {action.length > 0 && <ContentRow title="Action" items={action} />}
        {comedy.length > 0 && <ContentRow title="Comedy" items={comedy} />}
        {drama.length > 0 && <ContentRow title="Drama" items={drama} />}
        {sciFi.length > 0 && <ContentRow title="Sci-Fi" items={sciFi} />}
        {horror.length > 0 && <ContentRow title="Horror" items={horror} />}
      </div>
    </main>
  );
}