export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <div className="aspect-[4/5] rounded-sm bg-handloom-200" />
      <div className="mt-3 space-y-2">
        <div className="h-2.5 w-1/3 rounded bg-handloom-200" />
        <div className="h-3.5 w-4/5 rounded bg-handloom-200" />
        <div className="h-2.5 w-1/2 rounded bg-handloom-200" />
        <div className="h-3.5 w-1/4 rounded bg-handloom-200" />
      </div>
    </div>
  );
}
