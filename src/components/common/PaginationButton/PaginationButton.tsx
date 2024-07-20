import Link from "next/link";

type PaginationButtonProperties = {
  text: number;
  onClick?: () => void;
  isCurrent?: boolean;
};

export default function PaginationButton({
  isCurrent,
  onClick,
  text,
}: PaginationButtonProperties) {
  return (
    <Link href={`?${new URLSearchParams({ page: text.toString() })}`}>
      <button
        onClick={onClick}
        className={`${isCurrent ? "bg-primary text-white" : "bg-background"} flex h-5 w-5 items-center justify-center rounded-md p-3 text-center text-sm`}
      >
        {text}
      </button>
    </Link>
  );
}
