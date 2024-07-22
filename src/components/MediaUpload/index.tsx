"use client";

import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../ui/button";

interface MediaUploadProperties {
  onFilesAdded: (files: File[]) => void;
  onFileDeleted: (file: File) => void;
  label: string;
  CustomButton?: React.FC<{ onClick: () => void }>;
}

const MediaUpload: React.FC<MediaUploadProperties> = ({
  onFileDeleted,
  onFilesAdded,
  label,
  CustomButton,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputReference = useRef<HTMLInputElement | null>(null);

  const handleDragOver = useCallback((event_: React.DragEvent) => {
    event_.preventDefault();
    event_.stopPropagation();
  }, []);

  const handleFilesAdded = useCallback(
    (newFiles: FileList) => {
      const fileArray = Array.prototype.slice.call(newFiles);
      setFiles((previousFiles) => [...previousFiles, ...fileArray]);
      onFilesAdded(fileArray);
    },
    [onFilesAdded],
  );

  const handleDrop = useCallback(
    (event_: React.DragEvent) => {
      event_.preventDefault();
      event_.stopPropagation();
      const newFiles = event_.dataTransfer.files;
      handleFilesAdded(newFiles);
    },
    [handleFilesAdded],
  );

  const handleDeleteFile = useCallback(
    (file: File) => {
      setFiles((previousFiles) => previousFiles.filter((f) => f !== file));
      onFileDeleted(file);
    },
    [onFileDeleted],
  );

  const handleButtonClick = useCallback(() => {
    if (fileInputReference.current) {
      fileInputReference.current.click();
    }
  }, []);

  useEffect(() => {
    return () => {
      for (const file of files) URL.revokeObjectURL(URL.createObjectURL(file));
    };
  }, [files]);

  return (
    <div>
      <div className="flex w-[443px] flex-col gap-2 p-2">
        <h2 className="text-sm font-medium">Media</h2>
        {files.length === 0 ? (
          <div className="rounded-[6px]">
            <div
              className="flex h-[125px] w-full flex-col items-center justify-center gap-3 rounded-[6px] border border-dashed border-slate-300 bg-zinc-50"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              data-testid="drop-area"
            >
              <div className="">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputfile absolute z-[-1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
                  data-multiple-caption="{count} files selected"
                  multiple
                  ref={fileInputReference}
                  onChange={(event_) =>
                    event_.target.files && handleFilesAdded(event_.target.files)
                  }
                />
                {CustomButton ? (
                  <CustomButton onClick={handleButtonClick} />
                ) : (
                  <label
                    htmlFor="file"
                    className="inline-block cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-6 text-gray-900 shadow-[0px_1px_18px_0px_#0A39B01F]"
                  >
                    <span className="pointer-events-none">Upload New</span>
                  </label>
                )}
              </div>
              <label className="text-sm font-normal text-zinc-600">
                {label}
              </label>
            </div>
          </div>
        ) : (
          <div>
            {files.map((file, index) => (
              <div
                key={index}
                className="image-container group relative mb-2 h-[125px] w-full"
              >
                {URL.createObjectURL && (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    width={125}
                    height={125}
                    className="rounded-[6px]"
                  />
                )}
                <div className="absolute left-0 top-0 h-full w-full rounded-[6px] bg-[rgba(10,10,10,0.75)] opacity-0 group-hover:opacity-100"></div>
                <Button
                  variant={"outline"}
                  onClick={() => handleDeleteFile(file)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-white opacity-0 group-hover:opacity-100"
                  aria-label="delete file"
                >
                  <TrashIcon color="red" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaUpload;
