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
          width={620}
          className="rounded-t-lg object-cover"
          alt={title}
        />
        <span
          className={`absolute left-4 top-4 flex items-center justify-center rounded-full px-2 py-1.5 text-xs font-semibold capitalize tracking-wide text-white ${labelClassName}`}
        >
          {category}
        </span>
      </div>
      <CardHeader>
        <CardTitle>
          <div className="text-lg">{title}</div>
        </CardTitle>
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
