import Link from "next/link";

import { Contents } from "./constants/constant";

interface ContentProperties {
  id: string;
  text: string;
}

const TableOfContents = () => {
  return (
    <div className="p-[10px] text-neutral-dark-1 max-lg:mb-14 lg:sticky lg:top-20 lg:w-[350px]">
      <h2 className="text-md font-bold sm:text-lg text-foreground">Table of Contents</h2>
      <ul className="pl-6">
        {Contents.map((list: ContentProperties) => (
          <li
            className="mt-2 list-disc text-sm font-[400] leading-normal hover:text-primary sm:text-md"
            key={list.id}
          >
            <Link href={`#${list.id}`}>{list.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
