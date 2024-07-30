import Image, { StaticImageData } from "next/image";

import BlogLabel from "~/app/(landing-routes)/blog/_component/label";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

interface BlogCardProperties {
  index: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  type?: "featured";
  image: StaticImageData;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProperties> = ({
  index,
  title,
  date,
  readTime,
  category,
  image,
  type,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={`${index === 0 && type === "featured" ? "bg-white" : "bg-background"} text-neutral-dark-1 flex flex-col ${index === 0 && type === "featured" ? "h-[576px]" : "h-[280px]"}`}>
      <div className="relative hover:cursor-pointer grow shrink-0">
        <Image
          src={image}
          fill
          className={`object-cover w-full`}
          alt={title}
        />
        
      </div>
      <div className={`${index === 0 && type === "featured" ? "px-0 pb-4 pt-8" : "px-4 py-2"}`}>
        <div className={`${index === 0 && type === "featured" ? "space-y-4" : "space-y-2"}`}>
          <div
            className={`inline-flex items-center gap-2 px-2 py-1.5 text-xs font-semibold capitalize tracking-wide bg-[#484141] text-white rounded`}
          >
            <span className="h-2 w-2 bg-white rounded-full"></span>
            {category}
          </div>
          <h3 className={`${index === 0 && type === "featured" ? "text-2xl" : "text-lg"} font-semibold`}>
            {title}
          </h3>
          {
            index === 0 && type === "featured" && <p className="text-lg">We often hear about the ENIAC, hailed as the first computer, but its story is just one thread in a rich tapestry woven by brilliant...</p>
          }
          <div className={`flex items-center justify-between text-sm text-[#0A0A0A] text-muted-foreground`}>
            {
              index !== 0 && (<span>{readTime} mins read</span>)
            }
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-subtle-hover"></span>
              <span>{date}</span>
            </span>
            {
              index === 0 && type === "featured" && <span className="cursor-pointer">Full story</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
