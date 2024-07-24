"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { useToast } from "~/components/ui/use-toast";
import CustomButton from "../Button/button";

interface ProductDetailsProperties {
  productName?: string;
  productImageSrc?: string;
  productID?: string;
  category?: string;
  dateAdded?: string;
  stock?: string;
  price?: string;
  description?: string;
  onClose: () => void;
  onEdit: (productID: string) => void;
  onDelete: (productID: string) => void;
}

const ProductDetailsCard: React.FC<ProductDetailsProperties> = ({
  productName = "N/A",
  productImageSrc: productImageSource = "/default-image.jpg",
  productID = "N/A",
  category = "N/A",
  dateAdded = "N/A",
  stock = "N/A",
  price = "N/A",
  description = "No description available",
  onClose,
  onEdit,
  onDelete,
}) => {
  const { toast } = useToast();

  const handleEdit = () => {
    if (productID === "N/A") {
      toast({
        title: "Error",
        description: "Product ID is not available for editing.",
        variant: "destructive",
      });
    } else {
      onEdit(productID);
      toast({
        title: "Success",
        description: "Product details have been updated.",
        variant: "default",
      });
    }
  };

  const handleDelete = () => {
    if (productID === "N/A") {
      toast({
        title: "Error",
        description: "Product ID is not available for deletion.",
        variant: "destructive",
      });
    } else {
      onDelete(productID);
      toast({
        title: "Success",
        description: "Product has been deleted.",
        variant: "default",
      });
    }
  };

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
    toast({
      title: "Closed",
      description: "Product details view has been closed.",
      variant: "default",
    });
  };

  if (
    !productName ||
    !productImageSource ||
    !productID ||
    !category ||
    !dateAdded ||
    !stock ||
    !price ||
    !description
  ) {
    return (
      <div className="inline-flex max-w-[403px] flex-col justify-center rounded-md border border-solid border-input py-6 pl-[1.4375rem] pr-[1.5rem] text-sm shadow-[0px_1px_18px_rgba(10,_57,_176,_0.12)] transition-all duration-500">
        <div className="text-center text-error">
          Some product details are missing. Please provide complete product
          information.
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex max-w-[403px] flex-col justify-center rounded-md border border-solid border-border py-6 pl-[1.4375rem] pr-[1.5rem] text-sm shadow-[0px_1px_18px_rgba(10,_57,_176,_0.12)] transition-all duration-500">
      <header className="flex justify-between gap-5 px-px text-xl font-semibold text-neutral-dark-2">
        <div>{productName}</div>
        <div onClick={handleClose} role="button" aria-label="close">
          <X
            size={24}
            className="aspect-square h-6 w-6 shrink-0 cursor-pointer"
          />
        </div>
      </header>
      <section className="flex flex-col gap-4 self-stretch">
        <Image
          src={productImageSource}
          alt={`Product ${productName} Image`}
          width={403}
          height={174}
          className="mt-6 aspect-[2.33] w-full self-stretch rounded-[0.375rem] object-cover"
        />
        <div className="relative box-border h-px border-t-[1px] border-solid border-border" />
        <div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap">
          <div className="text-sm text-neutral-dark-1">Product ID</div>
          <div className="text-right text-sm text-neutral-dark-2">
            {productID}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap">
          <div className="text-sm text-neutral-dark-1">Category</div>
          <div className="text-right text-sm text-neutral-dark-2">
            {category}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap">
          <div className="text-sm text-neutral-dark-1">Date added</div>
          <div className="text-right text-sm text-neutral-dark-2">
            {dateAdded}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap">
          <div className="text-sm text-neutral-dark-1">Stock</div>
          <div className="text-right text-sm text-neutral-dark-2">{stock}</div>
        </div>
        <div className="flex justify-between gap-5 whitespace-nowrap">
          <div className="text-sm text-neutral-dark-1">Price</div>
          <div className="text-right text-sm text-neutral-dark-2">{price}</div>
        </div>
        <div className="relative box-border h-px border-t-[1px] border-solid border-border" />
        <div className="flex flex-col justify-center gap-[0.625rem] self-stretch rounded-md bg-neutral-50 p-4">
          <div className="text-sm text-neutral-dark-2">Description</div>
          <div className="mt-2.5 line-clamp-3 overflow-hidden text-ellipsis text-sm text-neutral-dark-1">
            {description}
          </div>
        </div>
        <div className="relative box-border h-px border-t-[1px] border-solid border-border" />
      </section>
      <div className="mt-6 flex gap-2 self-end whitespace-nowrap text-sm font-medium leading-6">
        <div
          onClick={handleDelete}
          className="items-center justify-center rounded-md border border-solid border-border bg-white text-error"
        >
          <CustomButton variant="ghost">Delete</CustomButton>
        </div>
        <div
          onClick={handleEdit}
          className="items-center justify-center rounded-md border border-solid border-input bg-white text-neutral-dark-2"
        >
          <CustomButton variant="ghost">Edit</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
