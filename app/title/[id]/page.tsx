import { notFound, redirect } from "next/navigation";
import { repository } from "@/lib/repository";

// Legacy route. Detail pages now live at /movie/:id and /series/:id,
// so old /title/:id links keep working via a redirect.
export default async function TitlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = await repository.getById(Number(id));
  if (!content) notFound();
  redirect(`/${content.type}/${content.id}`);
}
