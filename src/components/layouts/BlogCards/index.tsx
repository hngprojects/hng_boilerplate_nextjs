import Image, { StaticImageData } from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface BlogCardProperties {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: StaticImageData;
  labelClassName: string;
}

const BlogCard: React.FC<BlogCardProperties> = ({
  title,
  date,
  readTime,
  category,
  image,
  labelClassName,
}) => {
  return (
    <Card>
      <div className="relative hover:cursor-pointer">
        <Image
          src={image}
          height={288}
          width={512}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg object-cover"
          alt={title}
        />
        <span
          className={`max-w-1/2 absolute left-4 top-4 flex w-1/4 items-center justify-center rounded-full px-2 py-1.5 text-xs font-semibold capitalize tracking-wide text-white ${labelClassName}`}
        >
          {category}
        </span>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-[#0A0A0A] text-muted-foreground">
          <span>{date}</span>
          <span>{readTime} mins read</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
