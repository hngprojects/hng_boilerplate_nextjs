import Link from "next/link";

import { BackAngleBracket, ForwardAngleBracket } from "~/app/jobs/svgs";

type CareerListPaginationProperties = {
  page: number;
  total: number;
};

const setNewSearchParameter = (page: number) =>
  `?${new URLSearchParams({ page: page.toString() })}`;

export default function CareerListPagination({
  total,
  page,
}: CareerListPaginationProperties) {
  const lastPage = Math.ceil(total / 6);
  const isFirstPage = page === 1;
  const isLastPage = page === lastPage;
  const firstButton = isFirstPage ? page : isLastPage ? page - 2 : page - 1;
  const secondButton = isFirstPage ? page + 1 : isLastPage ? page - 1 : page;
  const thirdButton = isFirstPage ? page + 2 : isLastPage ? page : page + 1;

  return (
    <div className="flex w-full items-center justify-center gap-1">
      <div>
        <Link href={setNewSearchParameter(page - 1)}>
          <button
            disabled={isFirstPage}
            className={`${isFirstPage ? "stroke-stroke-colors-stroke text-stroke-colors-stroke" : "stroke-black"} flex items-center justify-center py-2 pl-3 pr-4 text-center`}
          >
            <span>
              <BackAngleBracket />
            </span>
            <span className="text-xl font-semibold">Previous</span>
          </button>
        </Link>
      </div>
      {page > 2 && <p>...</p>}
      <Link href={setNewSearchParameter(firstButton)}>
        <button
          data-testid="first-button"
          className={`${isFirstPage ? "bg-primary text-white" : "bg-background"} flex h-5 w-5 items-center justify-center rounded-md p-3 text-center text-sm`}
        >
          {firstButton}
        </button>
      </Link>
      <Link href={setNewSearchParameter(secondButton)}>
        <button
          data-testid="second-button"
          className={`${!isFirstPage && !isLastPage ? "bg-primary text-white" : "bg-background"} flex h-5 w-5 items-center justify-center rounded-md p-3 text-center text-sm`}
        >
          {secondButton}
        </button>
      </Link>
      <Link href={setNewSearchParameter(thirdButton)}>
        <button
          data-testid="third-button"
          className={`${isLastPage ? "bg-primary text-white" : "bg-background"} flex h-5 w-5 items-center justify-center rounded-md p-3 text-center text-sm`}
        >
          {thirdButton}
        </button>
      </Link>
      {page < lastPage - 1 && <p>...</p>}
      <div>
        <Link href={setNewSearchParameter(page + 1)}>
          <button
            disabled={isLastPage}
            className={`${isLastPage ? "stroke-stroke-colors-stroke text-stroke-colors-stroke" : "stroke-black"} flex items-center justify-center py-2 pl-3 pr-4 text-center`}
          >
            <span className="text-xl font-semibold">Next</span>
            <span>
              <ForwardAngleBracket />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
