import Link from "next/link";

import { Contents } from "~/app/(legal-terms)/terms-and-conditions/constants/constant";

interface ContentProperties {
  id: string;
  text: string;
}

const TableOfContents = () => {
  return (
    <div className="p-[10px] text-neutral-dark-1 max-lg:mb-14 lg:sticky lg:top-5 lg:w-[282px]">
      <h2 className="text-2xl font-bold sm:text-[28px]">Table of Contents</h2>
      <ul className="pl-6">
        {Contents.map((list: ContentProperties) => (
          <li
            className="mt-2 list-disc text-sm font-[400] leading-normal hover:text-primary sm:text-base"
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
