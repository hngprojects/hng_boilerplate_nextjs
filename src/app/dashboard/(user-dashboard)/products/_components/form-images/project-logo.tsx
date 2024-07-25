import { ImageIcon, X } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";

import BlurImage from "~/components/miscellaneous/blur-image";
import { cn } from "~/lib/utils";
import { NewProduct } from "../schema/schema";

type Properties = {
  form: UseFormReturn<NewProduct>;
  name: string;
};
const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.preventDefault();
};
const ProjectLogo = ({ form, name }: Properties) => {
  const [isDragging, setIsDragging] = useState(false);

  const projectLogo = form.getValues("media");

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
    <div className="relative grid aspect-square size-[inherit] place-items-center rounded-xl">
      <div
        data-upload
        className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/30 text-black"
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
          <p className="text-xl text-white">Drop to upload</p>
        </div>
      )}

      {projectLogo.url && typeof projectLogo.url === "string" ? (
        <div className="absolute inset-0 h-full w-full rounded-xl">
          <div className="h-full w-full overflow-hidden rounded-xl">
            <BlurImage
              src={projectLogo.url}
              width={500}
              height={500}
              alt="nft"
              className={cn(
                "size-full object-cover transition-all duration-300",
              )}
            />
          </div>
          <button
            disabled={false}
            className="absolute right-1 top-1 rounded-full bg-black/40 p-1 backdrop-blur-xl hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-black/40 md:-right-1 md:-top-1 md:bg-white/20 md:disabled:bg-white/20"
          >
            <X className="size-8 min-[500px]:size-10" />
          </button>
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
            className="hover:text-accent-color grid h-full w-full cursor-pointer place-items-center text-gray-300"
            htmlFor={`project_image`}
          >
            <button
              type="button"
              className="pointer-events-none flex flex-col items-center gap-y-1"
            >
              <ImageIcon className="size-16 md:size-24" />
              <p className="text-xs md:text-base">Add Image or drag it here</p>
            </button>
          </label>
          <input
            type="file"
            hidden
            accept=" image/*"
            name={`project_image`}
            id={`project_image`}
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectLogo;
