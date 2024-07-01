import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[134px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}
