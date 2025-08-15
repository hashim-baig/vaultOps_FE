import { Skeleton } from '@/components/ui/skeleton';

export function DomainCardSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className="w-full max-w-[250px] h-[200px] animate-pulse p-4">
                    <div className="px-4 my-1">
                        <Skeleton className="h-[100px] w-full max-w-[230px] rounded" />
                    </div>
                    <div className="flex-col items-start w-full space-y-2 px-4 my-0">
                        <Skeleton className="h-3 w-1/2 rounded" /> {/* title */}
                        <Skeleton className="h-2 w-full rounded" /> {/* url */}
                        <Skeleton className="h-2 w-full rounded" /> {/* password */}
                    </div>
                </div>
            ))}
        </div>
    );
}
