import { X } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import BlurImage from "~/components/miscellaneous/blur-image";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { EditProduct } from "../../_components/schema/schema";

type Properties = {
  form: UseFormReturn<EditProduct>;
  name: string;
};
const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
};
const ProjectLogo = ({ form, name }: Properties) => {
  const [isDragging, setIsDragging] = useState(false);

  const productImage = form.getValues("media");

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.dataTransfer.files[0] as File;

    if (target.type === "image/gif") {
      return name;
    }
    const event_data = {
      target: {
        files: event.dataTransfer.files,
      },
    };
    handleImageChange(
      event_data as unknown as React.ChangeEvent<HTMLInputElement>,
    );
    setIsDragging(false);
  };

  return (
    <div className="relative grid h-full w-[inherit] place-items-center rounded-xl bg-[#FAFAFA]">
      <div
        data-upload
        className="flexx absolute inset-0 z-10 hidden items-center justify-center rounded-xl bg-white/30 text-black"
      >
        <div className="grid h-full w-full place-items-center rounded-xl bg-white/80 uppercase backdrop-blur-xl">
          <p className="items-center md:flex md:flex-col">
            <span className="animate-pulse md:text-xs">Uploading...</span>{" "}
            <b>10%</b>
          </p>
        </div>
      </div>

      {isDragging && (
        <div className="pointer-events-none absolute inset-0 z-20 grid h-full w-full scale-95 place-items-center rounded-xl border-2 border-dashed border-white bg-white/20 backdrop-blur-xl">
          <p className="text-xl">Drop to upload</p>
        </div>
      )}

      {productImage.url && typeof productImage.url === "string" ? (
        <div className="inset-0 h-full w-full rounded-xl md:absolute">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <BlurImage
              src={productImage.url}
              width={500}
              height={500}
              alt="product image"
              quality={100}
              className={cn(
                "size-full object-cover transition-all duration-300",
              )}
            />
          </div>
          <Button
            disabled={false}
            variant={"ghost"}
            size={"icon"}
            type="button"
            className="absolute right-1 top-1 rounded-full bg-black/40 p-1 backdrop-blur-xl hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:bg-black/40 md:-right-1 md:-top-1 md:bg-white/20 md:disabled:bg-white/20"
          >
            <X className="size-8 min-[500px]:size-10" />
          </Button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsDragging(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsDragging(false);
          }}
          className="grid h-full w-full place-items-center"
        >
          <label
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-y-2 text-neutral-dark-1 hover:text-black"
            htmlFor={`media`}
          >
            <Button
              type="button"
              variant={"secondary"}
              size={"sm"}
              className="pointer-events-none flex !h-[32px] items-center bg-white text-sm text-[#0F172A] shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)]"
            >
              Upload New
            </Button>
            <p className="text-xs md:text-sm">Add Image or drag it here</p>
          </label>
          <input
            type="file"
            hidden
            accept=" image/*"
            name={`media`}
            id={`media`}
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectLogo;
