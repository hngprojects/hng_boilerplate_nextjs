import Image, { StaticImageData } from "next/image";

import BlogLabel from "~/app/(landing-routes)/blog/_component/label";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

interface BlogCardProperties {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: StaticImageData;
  labelClassName: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProperties> = ({
  title,
  date,
  readTime,
  category,
  image,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className="w-full max-w-[400px] cursor-pointer rounded-none shadow-none"
    >
      <div className="relative h-[260px] w-full hover:cursor-pointer md:h-40">
        <Image
          src={image}
          height={288}
          width={620}
          className="h-full w-full object-cover"
          alt={title}
        />
      </div>
      <CardHeader className="px-4 py-4">
        <div className="mb-2 flex items-center justify-start">
          <BlogLabel label={category} />
        </div>
        <CardTitle className="pb-2">
          <div className="line-clamp-2 text-lg">{title}</div>
        </CardTitle>
        <div className="flex items-center justify-between text-xs text-neutral-dark-1">
          <span>{date}</span>
          <span>{readTime} mins read</span>
        </div>
      </CardHeader>
    </Card>
  );
};

export default BlogCard;
