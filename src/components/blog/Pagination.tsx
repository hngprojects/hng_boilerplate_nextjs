import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center space-x-2">
        <button
          className={`flex items-center gap-1 px-2 py-2 font-semibold text-neutral-dark-1`}
        >
          <ChevronLeft size={14} className="text-neutral-dark-1" />
          Previous
        </button>

        <button className={`rounded bg-primary px-4 py-2 text-white`}>1</button>
        <button
          className={`duration rounded px-3 py-2 transition ease-in hover:bg-primary hover:text-white`}
        >
          2
        </button>
        <button
          className={`duration rounded px-3 py-2 transition ease-in hover:bg-primary hover:text-white`}
        >
          3
        </button>

        <span>...</span>

        <button
          className={`flex items-center gap-1 px-2 py-2 font-semibold text-black`}
        >
          Next
          <ChevronRight size={14} className="text-neutral-dark-1" />
        </button>
      </nav>
    </div>
  );
}
