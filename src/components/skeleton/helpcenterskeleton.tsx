"use client";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

const HelpCenterSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="w-full bg-background text-foreground rounded-sm">
          <CardContent className="pt-6">
              <Skeleton
                className="h-16 w-full rounded-lg"
                data-testid="skeleton"
              />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HelpCenterSkeleton;
