"use client";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

const JobSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="w-full bg-background text-foreground">
          <CardContent className="pt-6">
            <div className="flex w-full max-w-6xl flex-col space-y-3">
              <Skeleton
                className="h-20 w-full rounded-lg"
                data-testid="skeleton"
              />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" data-testid="skeleton" />
                <Skeleton className="h-4 w-full" data-testid="skeleton" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <Skeleton className="h-6 w-1/3" data-testid="skeleton" />
            <Skeleton className="h-10 w-28" data-testid="skeleton" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default JobSkeleton;
