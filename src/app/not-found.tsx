"use client";

import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Particles404 from "~/components/error/Particles404";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="grid h-screen w-full place-items-center bg-white">
      <div className="fixed left-0 top-0 min-h-[100dvh] w-screen bg-white" />
      <Particles404 />
      <div className="pointer-events-none relative z-30 flex flex-col gap-y-6">
        <p className="text-center font-medium uppercase text-[#f97415] sm:text-2xl md:text-3xl lg:text-4xl lg:font-bold xl:font-bold">
          Page Not Found
        </p>
        <Image
          src="/404.gif"
          alt="404"
          width={480}
          height={204}
          unoptimized
          loading="eager"
          priority
        />
        <div className="flex w-full items-center justify-center gap-x-4">
          <button
            onClick={() => router.back()}
            className="hover:text-accent-color pointer-events-auto flex items-center gap-x-2 rounded-xl border border-gray-200 bg-white px-4 py-2 transition-colors duration-300"
          >
            <ArrowLeft className="size-5 xl:size-6" />
            Back
          </button>
          <Link
            href="/"
            prefetch
            className="hover:text-accent-color pointer-events-auto flex items-center gap-x-2 rounded-xl border border-gray-200 bg-white px-4 py-2 transition-colors duration-300"
          >
            <Home className="size-5 xl:size-6" />
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
