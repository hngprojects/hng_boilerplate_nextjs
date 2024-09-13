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
    <aside
      data-testid="table-of-content"
      className={cn("space-y-2", className)}
    >
      <h3 className="text-lg font-bold leading-[29.05px] text-foreground md:leading-[33.89px]">
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
