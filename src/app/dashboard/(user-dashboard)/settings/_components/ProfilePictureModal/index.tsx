"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import { toast } from "~/components/ui/use-toast";
import { CloudinaryAsset } from "~/types";

interface ProfilePictureModalProperties {
  show: boolean;
  onClose: () => void;
  userId: string;
  accessToken: string;
  onUploadSuccess: (url: string | undefined) => void;
}

export default function ProfilePictureModal({
  show,
  onClose,
  userId,
  accessToken,
  onUploadSuccess,
}: ProfilePictureModalProperties) {
  const [image, setImage] = useState<File | Blob | undefined>();
  const [isPending, setIsPending] = useState(false);

  const uploadProfilePicture = async () => {
    if (!image) return;

    try {
      const formData = new FormData();
      formData.append("file", image);
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

      const API_URL = `${await getApiUrl()}/api/v1/profile/${userId}/profile-picture`;

      setIsPending(true);

      await axios.patch(
        API_URL,
        { profile_picture: profilePictureUrl },
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
      const API_URL = `${await getApiUrl()}/api/v1/profile/${userId}/profile-picture`;

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

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <h2 className="mb-4 text-lg font-bold">Update Profile Picture</h2>
        <div className="mb-4 flex items-center justify-center">
          {image && (
            <Image
              src={URL.createObjectURL(image)}
              alt="Profile Picture Preview"
              width={100}
              height={100}
              className="rounded-full"
            />
          )}
        </div>
        <input
          type="file"
          accept="image/jpeg,image/png,image/svg+xml"
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
            <CustomButton onClick={uploadProfilePicture} isLoading={isPending}>
              Upload Picture
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
