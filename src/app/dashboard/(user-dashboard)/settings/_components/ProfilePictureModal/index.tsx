"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import defaultProfilePic from "~/../public/images/pfp.jpg";
import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import { toast } from "~/components/ui/use-toast";
import { CloudinaryAsset } from "~/types";

interface ProfilePictureModalProperties {
  show: boolean;
  onClose: () => void;
  email: string;
  accessToken: string;
  profilePic: string;
  onUploadSuccess: (url: string | undefined) => void;
}

export default function ProfilePictureModal({
  show,
  onClose,
  email,
  accessToken,
  onUploadSuccess,
  profilePic,
}: ProfilePictureModalProperties) {
  const [image, setImage] = useState<File | Blob | undefined>();
  const [isPending, setIsPending] = useState(false);

  const uploadProfilePicture = async () => {
    if (!image) return;

    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("DisplayPhoto", image);
      formData.append("upload_preset", "starterhouse");
      formData.append("api_key", "673723355315667");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dnik53vns/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data: CloudinaryAsset = await response.json();
      const profilePictureUrl = data.url;

      const API_URL = `${await getApiUrl()}/api/v1/profile/${email}/picture`;

      setIsPending(true);

      await axios.put(
        API_URL,
        { DisplayPhoto: profilePictureUrl, Email: email },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      toast({
        title: "Success!",
        description: "Profile picture updated successfully",
      });

      onUploadSuccess(profilePictureUrl);
      onClose();
    } catch {
      toast({
        title: "Error",
        description: "Failed to upload profile picture. Please try again.",
      });
    } finally {
      setIsPending(false);
    }
  };

  const deleteProfilePicture = async () => {
    try {
      const API_URL = `${await getApiUrl()}/api/v1/profile/${email}/picture`;

      await axios.delete(API_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast({
        title: "Success!",
        description: "Profile picture deleted successfully",
      });

      // onUploadSuccess();
      onClose();
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete profile picture. Please try again.",
      });
    }
  };

  if (!show) return;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <h2 className="mb-4 text-lg font-bold">Update Profile Picture</h2>
        <div className="mb-4 flex items-center justify-center">
          <div className="h-[200px] w-[200px]">
            {image ? (
              <Image
                src={URL.createObjectURL(image)}
                alt="Profile Picture Preview"
                width={200}
                height={200}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <Image
                src={profilePic || defaultProfilePic.src}
                alt="Default Profile Picture"
                width={200}
                height={200}
                className="h-full w-full rounded-full object-cover"
              />
            )}
          </div>
        </div>
        <input
          type="file"
          name="DisplayPhoto"
          onChange={(entries) =>
            setImage(entries.target.files ? entries.target.files[0] : undefined)
          }
          className="mb-4"
        />
        <div className="flex justify-between">
          <CustomButton onClick={deleteProfilePicture} variant="outline">
            Delete Picture
          </CustomButton>
          <div className="flex gap-4">
            <CustomButton onClick={onClose} variant="outline">
              Cancel
            </CustomButton>
            <CustomButton
              onClick={uploadProfilePicture}
              isLoading={isPending}
              className="bg-primary"
            >
              Upload Picture
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
