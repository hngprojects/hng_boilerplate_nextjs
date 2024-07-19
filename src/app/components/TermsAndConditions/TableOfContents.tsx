import Link from "next/link";

import { Contents } from "~/app/constants/constant";

interface ContentProps {
  id: string;
  text: string;
}

const TableOfContents = () => {
  return (
    <div className="lg:w-[282px] p-[10px] max-lg:mb-14 lg:sticky lg:top-5">
      <h2 className="sm:text-[28px] text-2xl font-bold">Table of Contents</h2>
      <ul className="pl-6">
        {Contents.map((list: ContentProps) => (
          <li
            className="mt-2 sm:text-base text-sm list-disc leading-normal font-[400] hover:text-[#F97316]"
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
