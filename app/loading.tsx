import { SkeletonGrid } from "@/components/SkeletonCard";

// Route-level loading UI (App Router convention): shown while a page's
// server component is streaming in.
export default function Loading() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-24 md:px-10">
      <div className="mb-8 h-9 w-56 animate-pulse rounded bg-neutral-800" />
      <SkeletonGrid count={12} />
    </main>
  );
}
