/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import BlurImage from "../../miscellaneous/blur-image";
import { CalendarFormSchemaProps } from "../data/schema";
import { toast } from "sonner";
import { cn, formatFileSize, generateId } from "@/lib/utils/utils";
import { useUploadCalendar } from "@/hooks/for-calendar/use-upload-calendar";
import axios from "axios";
import AddImageIcon from "../../icons/AddImageIcon";
import { UseFormReturn } from "react-hook-form";
import { X } from "lucide-react";

type Props = {
  form: UseFormReturn<CalendarFormSchemaProps>;
  name: string;
};

const ProjectLogo = ({ form, name }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const {
    updateUploadProgress,
    updateUploadStatus,
    uploadStatus,
    updateUploadName,
    uploadName,
    uploadProgress,
    removeName,
  } = useUploadCalendar();
  const projectLogo = form.getValues("project_image");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    toast.dismiss("big-file");
    toast.dismiss("gif-not-allowed");
    const selectedFiles = e.target.files;
    if (!selectedFiles || selectedFiles.length === 0) return;
    if (selectedFiles[0].size > 2000000) {
      toast.error("File size exceeds 2MB", {
        duration: 3000,
        id: "big-file",
        position: "top-center",
      });
      return;
    }
    const selectedFile = selectedFiles[0];
    if (selectedFile.type === "image/gif") {
      toast.error("GIF files are not allowed", {
        duration: 3000,
        id: "gif-not-allowed",
        position: "bottom-right",
      });
      return;
    }
    updateUploadName(name);

    updateUploadStatus("uploading");

    const newFile = {
      data: selectedFile,
      name: selectedFile.name,
      size: formatFileSize(selectedFile.size),
      id: generateId(),
      path: URL.createObjectURL(selectedFile),
    };

    const data = new FormData();
    data.set("file", newFile.data);
    data.set("file_name", newFile.name);
    data.set("file_size", newFile.size);
    data.set("file_id", newFile.id);
    data.set("name", newFile.name);

    axios
      .post("/api/files", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress(progressEvent) {
          const { loaded, total } = progressEvent;
          const percentage = Math.floor((loaded * 100) / total!);
          updateUploadProgress(percentage);
        },
      })
      .then((response) => {
        const uploadedFileData = response.data;

        const image = {
          url: uploadedFileData.url,
          CID: uploadedFileData.CID,
        };

        form.setValue("project_image", image);

        updateUploadStatus("complete");
        removeName(name);
      })
      .catch((error) => {
        console.log(error);
        updateUploadStatus("error");
        updateUploadProgress(0);
        removeName(name);
        toast.error("Something went wrong", {
          duration: 3000,
          id: "big-file",
          position: "top-center",
        });
      })
      .finally(() => {
        updateUploadStatus("idle");
      });
  };
  const handleDeleteImage = async () => {
    const thisMember = form.getValues("project_image");
    setIsRemoving(true);

    const CID = thisMember.CID;

    try {
      await axios.delete(`https://api.pinata.cloud/pinning/unpin/${CID}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT_KEY}`,
        },
      });
      const image = {
        url: "",
        CID: "",
      };

      form.setValue("project_image", image);
      removeName(name);
      setIsRemoving(false);
    } catch (err) {
      toast.error("Unable to delete file", {
        duration: 3000,
        id: "delete-file",
        position: "top-center",
      });
      setIsRemoving(false);
      console.log(err);
    }
  };
  useEffect(() => {
    return () => {
      updateUploadStatus("idle");
      updateUploadProgress(0);
      removeName(name);
    };
  }, []);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toast.dismiss("gif-not-allowed");
    const target = e.dataTransfer.files[0] as File;
    if (!target.type.startsWith("image/")) {
      toast.error("File must be an image", {
        duration: 3000,
        id: "big-file",
        position: "bottom-right",
      });
      setIsDragging(false);
      return;
    }
    if (target.type === "image/gif") {
      toast.error("GIF files are not allowed", {
        duration: 3000,
        id: "gif-not-allowed",
        position: "bottom-right",
      });
      return;
    }
    const event = {
      target: {
        files: e.dataTransfer.files,
      },
    };
    handleImageChange(event as any);
    setIsDragging(false);
  };

  return (
    <div className="relative grid aspect-square size-[inherit] place-items-center rounded-xl bg-[#585858]">
      {uploadStatus === "uploading" && uploadName.includes(name) && (
        <div
          data-upload
          className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/30 text-black"
        >
          <div className="grid h-full w-full place-items-center rounded-xl bg-white/80 uppercase backdrop-blur-xl">
            <p className="items-center md:flex md:flex-col">
              <span className="animate-pulse md:text-xs">Uploading...</span>{" "}
              <b>{uploadProgress}%</b>
            </p>
          </div>
        </div>
      )}
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
                isRemoving ? "blur-xl grayscale" : "blur-0 grayscale-0",
              )}
            />
          </div>
          <button
            disabled={isRemoving}
            onClick={handleDeleteImage}
            className="absolute right-1 top-1 rounded-full bg-black/40 p-1 backdrop-blur-xl hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-black/40 md:-right-1 md:-top-1 md:bg-white/20 md:disabled:bg-white/20"
          >
            <X className="size-8 min-[500px]:size-10" />
          </button>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
          }}
          className="grid h-full w-full place-items-center"
        >
          <label
            className="grid h-full w-full cursor-pointer place-items-center text-gray-300 hover:text-accent-color"
            htmlFor={`project_image`}
          >
            <button
              type="button"
              className="pointer-events-none flex flex-col items-center gap-y-1"
            >
              <AddImageIcon className="size-16 md:size-24" />
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
