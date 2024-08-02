"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import BlogLabel from "~/app/(landing-routes)/blog/_component/label";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { dateFormated, readingTimeCalc } from "~/hooks/util-hooks/date";
import { ISingleBlog } from "~/types/blog.types";

interface IProperties {
  data: ISingleBlog;
  url: string;
}

const BlogCard: React.FC<IProperties> = ({ data, url }) => {
  const { title, created_at, category, image_url, content, id } = data;
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/blog/${id}`)}
      className="w-full max-w-[400px] cursor-pointer rounded-none shadow-none"
    >
      <div className="relative h-[260px] w-full hover:cursor-pointer md:h-40">
        {url && (
          <Image
            src={`${url}/${image_url}`}
            height={288}
            width={620}
            className="h-full w-full object-cover"
            alt={title}
          />
        )}
      </div>
      <CardHeader className="px-4 py-4">
        <div className="mb-2 flex items-center justify-start">
          <BlogLabel label={category} />
        </div>
        <CardTitle className="pb-2">
          <div className="line-clamp-2 text-lg">{title}</div>
        </CardTitle>
        <div className="flex items-center justify-between text-xs text-neutral-dark-1">
          <span>{dateFormated(created_at)}</span>
          <span>{readingTimeCalc(content)} mins read</span>
        </div>
      </CardHeader>
    </Card>
  );
};

export default BlogCard;
