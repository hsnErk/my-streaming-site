import { notFound } from "next/navigation";
import { repository } from "@/lib/repository";
import { ContentCard } from "@/components/ContentCard";
import { DetailActions } from "@/components/DetailActions";

export default async function TitlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = await repository.getById(Number(id));
  if (!content) notFound();

  const similar = await repository.similarTo(content.id);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <div className="relative h-[60vh] w-full">
        <img src={content.banner} alt={content.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12">
          <h1 className="text-3xl font-bold md:text-5xl">{content.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
            <span className="font-semibold text-green-400">★ {content.rating}</span>
            <span>{content.year}</span>
            <span>{content.duration}</span>
            <span className="rounded border border-neutral-500 px-1.5 text-xs uppercase">{content.type}</span>
          </div>
          <DetailActions id={content.id} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">
        <div className="mb-4 flex flex-wrap gap-2">
          {content.genre.map((g) => (
            <span key={g} className="rounded-full bg-neutral-800 px-3 py-1 text-xs">{g}</span>
          ))}
        </div>
        <p className="text-neutral-200">{content.description}</p>
        <p className="mt-4 text-sm text-neutral-400">
          <span className="text-neutral-500">Cast: </span>{content.cast.join(", ")}
        </p>
      </div>

      {similar.length > 0 && (
        <div className="px-6 pb-12 md:px-12">
          <h2 className="mb-4 text-xl font-semibold">More Like This</h2>
          <div className="flex flex-wrap gap-4">
            {similar.map((item) => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}