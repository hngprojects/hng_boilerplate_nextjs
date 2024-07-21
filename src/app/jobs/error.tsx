"use client";

import EmptyList from "~/components/common/Empty List/EmptyList";

export default function JobListError() {
  return (
    <div className="flex w-full flex-col items-center bg-background">
      <div className="flex w-full max-w-[1440px] flex-col items-center px-6">
        <EmptyList
          image="/images/no-jobs.svg"
          mainText="No available Jobs at the moment"
          subText="Come back later!"
        />
      </div>
    </div>
  );
}
