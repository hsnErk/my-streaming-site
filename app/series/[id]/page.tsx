import { notFound } from "next/navigation";
import { repository } from "@/lib/repository";
import { ContentDetail } from "@/components/ContentDetail";

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = await repository.getById(Number(id));
  // 404 for unknown ids AND for ids that belong to a movie —
  // /series/:id is strictly for series.
  if (!content || content.type !== "series") notFound();

  const similar = await repository.similarTo(content.id);
  return <ContentDetail content={content} similar={similar} />;
}
