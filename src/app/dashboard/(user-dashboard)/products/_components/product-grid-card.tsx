import CustomButton from "~/components/common/common-button/common-button";
import BlurImage from "~/components/miscellaneous/blur-image";
import { Badge, type BadgeProperties } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { formatPrice } from "~/lib/utils";
import { ProductHighlightTerm } from "./product-highlight-term";

const stockStatus = {
  in_stock: {
    variant: "success-dot",
    label: "In Stock",
  },
  out_of_stock: {
    variant: "error-dot",
    label: "Out of Stock",
  },
  low_on_stock: {
    variant: "warning-dot",
    label: "Low on Stock",
  },
};

type ProductGridCardProperties = {
  id?: string;
  title: string;
  description?: string;
  status: "in_stock" | "out_of_stock" | "low_on_stock";
  price: number;
  imgSrc: string;
  searchTerm?: string;
  category: string;
  onEdit: () => void; // (id: string) => void;
  onDelete: () => void; // (id: string) => void;
  onSelect: () => void; // (id: string) => void;
};

export function ProductGridCard({
  // id,
  title = "Product 1",
  // description,
  imgSrc,
  price = 15,
  status = "in_stock",
  searchTerm = "",
  category,
  onEdit,
  onDelete,
  onSelect,
}: ProductGridCardProperties) {
  const stock = stockStatus[status];
  return (
    <div className="flex max-w-[240px] flex-col gap-[17.305px] rounded-[6px] border-[0.705px] bg-white px-4 py-4">
      <div>
        <div className="relative aspect-[21/11] w-full overflow-hidden rounded-[7.049px]">
          <Input
            type="checkbox"
            className="z-1 absolute left-2 top-2 size-4"
            onClick={onSelect}
          />
          <BlurImage src={imgSrc} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="space-y-2">
          <div className="flex flex-wrap justify-between gap-2 text-[16.917px] font-bold -tracking-[0.338px]">
            <h2>
              <ProductHighlightTerm searchTerm={searchTerm} title={title} />
            </h2>
            <p>{formatPrice(price)}</p>
          </div>
          <div>
            <p className="text-[11.278px] text-neutral-dark-1">{category}</p>
          </div>
          <div>
            <Badge
              variant={stock.variant as BadgeProperties["variant"]}
              className="h-5"
            >
              {stock.label}
            </Badge>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-1.5">
          <CustomButton
            variant="outline"
            className="h-8 flex-1 border-[0.705px] text-xs"
            onClick={onEdit}
          >
            Edit
          </CustomButton>
          <CustomButton
            variant="outline"
            className="h-8 flex-1 border-[0.705px] text-xs text-error"
            onClick={onDelete}
          >
            Delete
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
