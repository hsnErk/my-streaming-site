// Skeleton placeholders shown while content is loading.
// Dimensions mirror ContentCard (w-44, h-64 poster) so the layout doesn't shift.
export function SkeletonCard() {
  return (
    <div
      aria-hidden="true"
      className="w-44 shrink-0 overflow-hidden rounded-md bg-neutral-900"
    >
      <div className="h-64 w-full animate-pulse bg-neutral-800" />
      <div className="space-y-2 p-2">
        <div className="h-3.5 w-3/4 animate-pulse rounded bg-neutral-800" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-neutral-800" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
