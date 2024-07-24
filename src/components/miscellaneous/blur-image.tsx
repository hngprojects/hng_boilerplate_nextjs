"use client";

import Image from "next/image";
import { useState, type ComponentProps } from "react";

import { cn } from "~/lib/utils";

export default function BlurImage(properties: ComponentProps<typeof Image>) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...properties}
      alt={properties.alt}
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "scale-105 blur-lg" : "scale-100 blur-0",
        properties.className,
      )}
      onLoad={() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }}
    />
  );
}
