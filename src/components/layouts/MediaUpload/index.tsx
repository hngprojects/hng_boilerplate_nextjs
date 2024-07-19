"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image'
import trash from './trash-icon.png'
import { Button } from '../../ui/button'


interface MediaUploadProps {
    onFilesAdded: (files: File[]) => void;
    onFileDeleted: (file: File) => void;
    label: string;
    CustomButton?: React.FC<{ onClick: () => void }>;
  }


const MediaUpload: React.FC<MediaUploadProps> = ({
    onFileDeleted,
    onFilesAdded,
    label,
    CustomButton
    }) => {
    
        // Variable declarations
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);


        // function declarations
    // function to handle the drag events
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
      };

    //   function to handle the addition of files
      const handleFilesAdded = (newFiles: FileList) => {
        const fileArray = Array.from(newFiles);
        setFiles((prevFiles) => [...prevFiles, ...fileArray]);
        onFilesAdded(fileArray);
      };


    //   function to handle dropin the image in the drop zone
      const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const newFiles = e.dataTransfer.files;
        handleFilesAdded(newFiles);
      };


    //   function to delete the files
      const handleDeleteFile = (file: File) => {
        setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
        onFileDeleted(file);
      };


    //   function for the custom button
      const handleButtonClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };

    return ( 
        <div>
            <div className="w-[443px] p-2 flex flex-col gap-2">
                <h2 className="font-medium text-sm">Media</h2>
                {
                    files.length === 0 ?

                    <div className="rounded-[6px]">
                        
                        <div className="border rounded-[6px] border-dashed border-[#CBD5E1] w-full h-[125px] flex flex-col gap-3 items-center justify-center bg-[#FAFAFA]"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <div className=''>
                                <input 
                                type="file"
                                name="file"
                                id="file"
                                className="w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute z-[-1] inputfile "
                                data-multiple-caption="{count} files selected"
                                multiple
                                ref={fileInputRef}
                                onChange={(e) => e.target.files && handleFilesAdded(e.target.files)}
                                    />
                                {CustomButton ? (
                                <CustomButton onClick={handleButtonClick}/>
                                ) : (
                                    <label htmlFor="file" className="shadow-[0px_1px_18px_0px_#0A39B01F] border border-gray-300 text-gray-900 font-medium leading-6 text-sm inline-block rounded-md px-4 py-2 bg-white cursor-pointer"><span className="pointer-events-none">Upload New</span></label>
                                )}
                            </div>
                            <label className='font-normal text-sm text-[#525252] '>{label}</label>
                        </div>
                    </div>
                :
                    <div>
                        {files.map((file, index) => (
                        <div key={index} className='relative w-full h-[125px] image-container group mb-2'>
                            {/* <span>{file.name}</span> */}
                            <img src={URL.createObjectURL(file)} alt={file.name} className='object-cover w-full h-full rounded-[6px]'/>
                            <div className='rounded-[6px] absolute top-0 left-0 w-full h-full bg-[rgba(10,10,10,0.75)] opacity-0 group-hover:opacity-100'></div>
                            <Button variant={'outline'} onClick={() => handleDeleteFile(file)} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-white p-2 rounded-full opacity-0 group-hover:opacity-100'><Image src={trash} alt={'trash-icon'}/></Button>
                        </div>
                        ))}
                    </div>
                }
            </div>
        </div>
     );
}
 
export default MediaUpload;