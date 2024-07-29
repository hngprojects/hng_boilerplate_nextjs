import { cn } from "~/lib/utils";

const WordCounter = ({ word, length }: { word?: string; length: number }) => {
  return (
    <div
      className={cn(
        "flex h-[14px] w-full items-center justify-end gap-x-1 text-xs transition-opacity duration-500 sm:h-[18px] sm:text-sm lg:text-base",
        word!.length > 0 ? "opacity-80" : "pointer-events-none opacity-0",
      )}
    >
      <span className={word!.length === length ? "font-medium" : "font-[300]"}>
        {word!.length}
      </span>
      <span className="font-medium text-gray-300">/</span>
      <span className="font-medium">{length}</span>
    </div>
  );
};

export default WordCounter;
