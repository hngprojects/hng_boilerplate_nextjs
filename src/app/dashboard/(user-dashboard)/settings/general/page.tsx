"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

import defaultProfilePic from "~/../public/images/pfp.jpg";
import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import ProfileUpdateSuccessModal from "~/components/common/modals/profile-update-success";
import { Textarea } from "~/components/common/text-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import ProfilePictureModal from "../_components/ProfilePictureModal";
import { InstagramIcon, LinkedinIcon, XIcon } from "./icons";

const pronouns = [
  { value: "He/Him", label: "He/Him" },
  { value: "She/Her", label: "She/Her" },
  { value: "Other", label: "Other" },
];

export default function UserSettingsPage() {
  const { toast } = useToast();
  const { data } = useSession();

  const [error, setError] = useState<undefined | string>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [showProfilePictureModal, setShowProfilePictureModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | undefined>();
  const openProfilePictureModal = () => setShowProfilePictureModal(true);

  const [isPending, setIsPending] = useState(false);

  const [pronoun, setPronoun] = useState("");

  const [formData, setFormData] = useState({
    user_name: "",
    job_title: "",
    department: "",
    email: "",
    bio: "",
    first_name: "",
    last_name: "",
    facebook_link: "",
    twitter_link: "",
    linkedin_link: "",
  });

  const formDataHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    (async () => {
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/users/${data?.user.id}`;
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${data?.access_token}`,
          },
        });

        if (response?.data) {
          const userData = response?.data?.profile;
          setPronoun(userData.pronoun || "");

          setFormData({
            bio: userData.bio || "",
            job_title: userData.job_title || "",
            email: userData.email || "",
            department: userData.department || "",
            user_name: userData.user_name || "",
            first_name: userData.first_name || "",
            last_name: userData.last_name || "",
            facebook_link: userData.facebook_link || "",
            twitter_link: userData.twitter_link || "",
            linkedin_link: userData.linkedin_link || "",
          });
          setProfilePicture(response?.data.avatar_url || defaultProfilePic.src);
        }
      } catch {
        setError("An error occurred while retrieving your information");
      }
    })();
  }, [data?.access_token, data?.user.id]);

  const submit = async () => {
    if (!isValidInstagramUrl(formData.facebook_link)) {
      return toast({
        title: "Warning!",
        description: "Enter a valid Instagram url",
      });
    }
    if (!isValidLinkedInUrl(formData.linkedin_link)) {
      return toast({
        title: "Warning!",
        description: "Enter a valid Linkedin url",
      });
    }

    try {
      setIsPending(true);

      setIsSuccess(true);
    } catch {
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[926px] bg-white p-[32px]">
      <header className="mb-[24px]">
        <h2 className="mb-[16px] text-[14px] font-medium text-[#0F172A]">
          Your photo
        </h2>
        <div className="flex items-center gap-[16px]">
          <div
            className="relative grid h-[108px] w-[108px] shrink-0 place-items-center overflow-hidden rounded-full border-[1px] border-dashed border-[#cbd5e1] bg-[#fafafa]"
            onClick={openProfilePictureModal}
          >
            <label
              htmlFor="profile-picture"
              className="cursor-pointer text-[24px] font-medium"
            >
              {data?.user.first_name?.slice(2)}
            </label>
            {profilePicture && (
              <Image
                src={profilePicture}
                alt="Profile Picture"
                layout="fill"
                quality={100}
                className="absolute h-[108px] w-[108px] overflow-hidden rounded-[12px] object-cover"
                loading="lazy"
                unoptimized={true}
              />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-orange-500">
              Upload Profile Picture
            </h1>
            <p className="text-[#525252]">
              Photos help your teammates recognize you.
            </p>
          </div>
        </div>
      </header>

      <ProfilePictureModal
        email={data?.user.email || ""}
        show={showProfilePictureModal}
        profilePic={profilePicture || ""}
        onClose={() => setShowProfilePictureModal(false)}
        accessToken={data?.access_token ?? ""}
        onUploadSuccess={(newProfilePictureUrl) =>
          setProfilePicture(newProfilePictureUrl)
        }
      />
      <div className="flex flex-col gap-[24px]">
        <div className="grid gap-x-[16px] gap-y-[24px] lg:grid-cols-2">
          <CustomInput
            placeholder="Enter first name"
            label="First Name"
            className="border-border bg-white"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={formDataHandler}
          />
          <CustomInput
            placeholder="Enter last name"
            label="Last Name"
            className="border-border bg-white"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={formDataHandler}
          />
          <CustomInput
            placeholder="Enter username"
            label="Username"
            className="border-border bg-white"
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={formDataHandler}
          />
          <div>
            <label className="mb-2 flex border-0 text-sm font-medium text-foreground">
              Pronouns
            </label>
            <Select
              value={pronoun}
              onValueChange={(value) => setPronoun(value)}
            >
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {pronouns.map((pronoun) => (
                  <SelectItem key={pronoun.value} value={pronoun.value}>
                    {pronoun.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <CustomInput
            placeholder="Enter job title"
            label="Your job title"
            className="border-border bg-white"
            type="text"
            name="job_title"
            value={formData.job_title}
            onChange={formDataHandler}
          />
          <CustomInput
            placeholder="Enter department or team"
            label="Department or team"
            className="border-border bg-white"
            type="text"
            name="department"
            value={formData.department}
            onChange={formDataHandler}
          />
        </div>
        <div>
          <CustomInput
            placeholder="Enter email address"
            label="Your email address"
            className="border-border bg-white"
            type="email"
            name="email"
            isDisabled
            value={data?.user.email}
          />
        </div>
        <div>
          <label className="mb-2 flex border-0 text-sm font-medium text-foreground">
            Bio
          </label>
          <Textarea
            name="bio"
            value={formData.bio}
            onChange={formDataHandler}
            className="resize-none bg-white text-[#020817]"
          />
          <div className="border-b-[1px] border-b-[#e4e2e2]">
            <p className="pb-[24px] pt-2 text-[14px] text-[#64748B]">
              Maximum of 64 characters
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-[13px]">Connect Social Links</h1>
          <div className="flex flex-col gap-[16px]">
            <div className="relative">
              <XIcon className="absolute left-[8px] top-[50%] translate-y-[-50%]" />
              <input
                name="twitter_link"
                value={formData.twitter_link}
                onChange={formDataHandler}
                className="h-[40px] w-full rounded-[4px] border-[1px] border-[#cbd5e1] bg-white px-[8px] py-[12px] pl-[32px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <InstagramIcon className="absolute left-[8px] top-[50%] translate-y-[-50%]" />
              <input
                name="facebook_link"
                value={formData.facebook_link}
                onChange={formDataHandler}
                className="h-[40px] w-full rounded-[4px] border-[1px] border-[#cbd5e1] bg-white px-[8px] py-[12px] pl-[32px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <LinkedinIcon className="absolute left-[8px] top-[50%] translate-y-[-50%]" />
              <input
                name="linkedin_link"
                value={formData.linkedin_link}
                onChange={formDataHandler}
                className="h-[40px] w-full rounded-[4px] border-[1px] border-[#cbd5e1] bg-white px-[8px] py-[12px] pl-[32px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>
        <div className="text-[14px] lg:text-[16px]">
          {error && <p className="text-[#E00414]">{error}</p>}
        </div>
        <div className="ml-auto flex w-max items-center justify-start gap-[12px]">
          <CustomButton size="lg" variant="outline">
            Cancel
          </CustomButton>
          <CustomButton
            isLoading={isPending}
            onClick={submit}
            size="lg"
            className="bg-primary"
          >
            Save Changes
          </CustomButton>
        </div>
        {isSuccess && (
          <ProfileUpdateSuccessModal
            show={isSuccess}
            onClose={() => setIsSuccess(false)}
          />
        )}
      </div>
    </div>
  );
}

function isValidLinkedInUrl(url: string) {
  const linkedInRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/[\w/-]+\/?$/;
  return linkedInRegex.test(url);
}

function isValidInstagramUrl(url: string) {
  const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[\w.]+\/?$/;
  return instagramRegex.test(url);
}
