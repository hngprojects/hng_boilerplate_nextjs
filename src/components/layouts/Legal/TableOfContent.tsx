import { cn } from "~/lib/utils";
import TableOfContentItem from "./TableOfContentItem";

type TableOfContentProperties = {
  className?: string;
  listOfContent: { href: string; label: string }[];
};

export default function TableOfContent({
  className,
  listOfContent,
}: TableOfContentProperties) {
  return (
    <aside className={cn("space-y-2", className)}>
      <h3 className="text-2xl font-bold leading-[29.05px] text-neutral-dark-1 md:text-[28px] md:leading-[33.89px]">
        Table of Content
      </h3>

      <ul className="ml-1.5 space-y-2">
        {listOfContent.map((item) => (
          <TableOfContentItem key={item.href} href={item.href}>
            {item.label}
          </TableOfContentItem>
        ))}
      </ul>
    </aside>
  );
}
