"use client";

import React, { useEffect, useState } from "react";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Card } from "~/components/ui/card";

const RecentSales: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="flex h-full basis-1/2 flex-col items-center justify-center rounded-xl border border-border bg-white p-3 shadow-spread md:p-5">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <p className="text-base font-medium text-[#080808]">No recent sales</p>
      )}
    </Card>
  );
};

export default RecentSales;
