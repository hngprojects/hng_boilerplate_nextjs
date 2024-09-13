import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import useGeneratePagesNumbers from "~/hooks/use-generate-pagination";

interface IProperties {
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isloading: boolean;
}

const Pigination: FC<IProperties> = ({
  currentPage,
  totalPage,
  setCurrentPage,
  isloading,
}) => {
  const { before, after } = useGeneratePagesNumbers(currentPage, totalPage);
  return (
    <div className="flex w-full items-center justify-between gap-2 border-t-[1px] border-border px-6 py-4">
      <span className="text-sm font-semibold text-neutral-dark-2">
        Page {currentPage} of {totalPage}
      </span>
      <div className="flex items-center justify-between gap-1">
        {before.map((item, index) => {
          if (item) {
            return (
              <CustomButton
                key={index}
                variant="outline"
                className="h-8 w-8"
                onClick={() => setCurrentPage(item as number)}
                isDisabled={isloading}
              >
                {item}
              </CustomButton>
            );
          }
        })}
        <CustomButton
          variant="outline"
          className="h-8 w-8 border-primary bg-primary/30"
          isDisabled={true}
        >
          {currentPage}
        </CustomButton>
        {after.map((item, index) => {
          if (item)
            return (
              <CustomButton
                key={index}
                variant="outline"
                className={`h-8 w-8`}
                onClick={() => setCurrentPage(item)}
                isDisabled={isloading}
              >
                {item}
              </CustomButton>
            );
        })}
      </div>
      <div className="flex w-full max-w-[84px] items-center justify-between gap-4">
        <CustomButton
          className="h-8 w-8 p-0"
          variant="outline"
          isDisabled={currentPage === 1 || isloading}
          onClick={() => setCurrentPage((previous) => previous - 1)}
        >
          <ChevronLeft className="h-5 w-5 text-neutral-dark-1" />
        </CustomButton>
        <CustomButton
          variant="outline"
          className="h-8 w-8 p-0"
          isDisabled={currentPage === totalPage || isloading}
          onClick={() => setCurrentPage((previous) => previous + 1)}
        >
          <ChevronRight className="h-5 w-5 text-neutral-dark-1" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Pigination;
