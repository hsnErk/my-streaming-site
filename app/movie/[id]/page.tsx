import { notFound } from "next/navigation";
import { repository } from "@/lib/repository";
import { ContentDetail } from "@/components/ContentDetail";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = await repository.getById(Number(id));
  // 404 for unknown ids AND for ids that belong to a series —
  // /movie/:id is strictly for movies.
  if (!content || content.type !== "movie") notFound();

  const similar = await repository.similarTo(content.id);
  return <ContentDetail content={content} similar={similar} />;
}
