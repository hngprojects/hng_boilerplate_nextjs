import CustomButton from "~/components/common/common-button/common-button";
import BlurImage from "~/components/miscellaneous/blur-image";
import { Input } from "~/components/ui/input";
import { formatPrice } from "~/lib/utils";
import { Product } from "~/types";
import { ProductHighlightTerm } from "./product-highlight-term";

interface ProductGridCardProperties extends Product {
  searchTerm: string;
}

export function ProductGridCard({
  image,
  price = 15,
  searchTerm = "",
  category,
  name,
}: ProductGridCardProperties) {
  return (
    <div className="flex max-w-[240px] flex-col gap-[17.305px] rounded-[6px] border-[0.705px] bg-white px-4 py-4">
      <div>
        <div className="relative aspect-[21/11] w-full overflow-hidden rounded-[7.049px]">
          <Input
            type="checkbox"
            className="z-1 absolute left-2 top-2 size-4"
            // onClick={onSelect}
          />
          <BlurImage src={image} alt={name} fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="space-y-2">
          <div className="flex flex-wrap justify-between gap-2 text-[16.917px] font-bold -tracking-[0.338px]">
            <h2>
              <ProductHighlightTerm searchTerm={searchTerm} name={name} />
            </h2>
            <p>{formatPrice(price)}</p>
          </div>
          <div>
            <p className="text-[11.278px] text-neutral-dark-1">{category}</p>
          </div>
          <div>
            {/* <Badge
              variant={stock.variant as BadgeProperties["variant"]}
              className="h-5"
            >
              {stock.label}
            </Badge> */}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-1.5">
          <CustomButton
            variant="outline"
            className="h-8 flex-1 border-[0.705px] text-xs"
            // onClick={onEdit}
          >
            Edit
          </CustomButton>
          <CustomButton
            variant="outline"
            className="h-8 flex-1 border-[0.705px] text-xs text-error"
            // onClick={onDelete}
          >
            Delete
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
