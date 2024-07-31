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
        "duration-500 ease-in-out",
        isLoading ? "blur-lg" : "blur-0",
        properties.className,
      )}
      onLoad={() => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }}
    />
  );
}
