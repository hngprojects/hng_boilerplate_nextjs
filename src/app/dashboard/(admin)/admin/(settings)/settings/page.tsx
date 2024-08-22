"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

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
import { toast } from "~/components/ui/use-toast";
import { InstagramIcon, LinkedinIcon, XIcon } from "./icons";

const pronouns = [
  { value: "He/Him", label: "He/Him" },
  { value: "She/Her", label: "She/Her" },
  { value: "Other", label: "Other" },
];

export default function SettingsPage() {
  const { data } = useSession();
  const [image, setImage] = useState<File | Blob | undefined>();

  const [error, setError] = useState<undefined | string>();
  const [isSuccess, setIsSuccess] = useState(false);

  const [isPending, setIsPending] = useState(false);

  const [pronoun, setPronoun] = useState("");

  const [profilePicture, setProfilePicture] = useState<string | undefined>();

  const [socialLinks, setSocialLinks] = useState({
    x: "",
    instagram: "",
    linkedin: "",
  });

  const linksDataHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setSocialLinks((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const [formData, setFormData] = useState({
    username: "",
    jobTitle: "",
    department: "",
    email: "",
    bio: "",
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
      const API_URL = `${baseUrl}/api/v1/profile/${data?.user.id}`;
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${data?.access_token}`,
          },
        });
        if (response.data?.data) {
          //console.log("Fetched profile data:", response.data.data);
          const { avatar_url, profile_pic_url } = response.data.data;
          setPronoun(response.data.data.pronouns);
          setSocialLinks({
            x: response.data.data.social_links
              ? response.data.data.social_links[0]
              : "",
            instagram: response.data.data.social_links
              ? response.data.data.social_links[1]
              : "",
            linkedin: response.data.data.social_links
              ? response.data.data.social_links[2]
              : "",
          });
          setFormData({
            bio: response.data.data.bio ?? "",
            jobTitle: response.data.data.jobTitle ?? "",
            email: response.data.data.email ?? "",
            department: response.data.data.department ?? "",
            username: response.data.data.username ?? "",
          });
          setProfilePicture(avatar_url || profile_pic_url);
          setIsSuccess(true);
        }
      } catch {
        setError("An error occurred while retrieving your information");
      }
    })();
  }, [data?.access_token, data?.user.id]);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);

      const formData = new FormData();
      formData.append("avatar", file);

      try {
        const baseUrl = await getApiUrl();
        const UPLOAD_API_URL = `${baseUrl}/api/v1/profile/upload-image`;

        const uploadResponse = await axios.post(UPLOAD_API_URL, formData, {
          headers: {
            Authorization: `Bearer ${data?.access_token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (uploadResponse.status === 200) {
          const { avatar_url, profile_pic_url } = uploadResponse.data.data;
          const profilePicUrl = avatar_url || profile_pic_url;

          setProfilePicture(profilePicUrl);

          setFormData((previousData) => ({
            ...previousData,
            profile_pic_url: profilePicture,
          }));
        } else {
          throw new Error(".");
        }
      } catch {
        setError(".");
      }
    }
  };

  const submit = async () => {
    if (!isValidXUrl(socialLinks.x)) {
      return toast({ title: "Warning!", description: "Enter a valid X url" });
    }
    if (!isValidInstagramUrl(socialLinks.instagram)) {
      return toast({
        title: "Warning!",
        description: "Enter a valid Instagram url",
      });
    }
    if (!isValidLinkedInUrl(socialLinks.linkedin)) {
      return toast({
        title: "Warning!",
        description: "Enter a valid Linkedin url",
      });
    }

    try {
      const payload = {
        ...formData,
        pronouns: pronoun,
        social_links: Object.values(socialLinks),
        profile_pic_url: profilePicture,
      };
      setIsPending(true);
      // const baseUrl = await getApiUrl();
      // const API_URL = `${baseUrl}/api/v1/profile/${data?.user.id}`;

      const updatedUser = {
        ...data?.user,
        image: payload.profile_pic_url,
      };

      const event = new CustomEvent("session", {
        detail: { session: { ...data, user: updatedUser } },
      });

      window.dispatchEvent(event);

      setIsSuccess(true);

      window.dispatchEvent(
        new CustomEvent("userProfileUpdate", {
          detail: { profilePicUrl: profilePicture },
        }),
      );
    } catch {
      setIsPending(false);
      setError("An error occurred while saving your information");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[826px] bg-white p-[32px]">
      <header className="mb-[24px]">
        <h2 className="mb-[16px] text-[14px] font-medium text-[#0F172A]">
          Your photo
        </h2>
        <div className="flex items-center gap-[16px]">
          <div className="relative grid h-[108px] w-[108px] shrink-0 place-items-center overflow-hidden rounded-full border-[1px] border-dashed border-[#cbd5e1] bg-[#fafafa]">
            <label
              htmlFor="profile-picture"
              className="cursor-pointer text-[24px] font-medium"
            >
              {data?.user.first_name?.slice(2)}
            </label>
            <input
              className="sr-only"
              id="profile-picture"
              type="file"
              onChange={handleImageUpload}
              accept="image/jpeg,image/png,image/svg+xml"
            />
            {(image || profilePicture) && (
              <Image
                src={image ? URL.createObjectURL(image) : profilePicture!}
                alt="Picture of the author"
                fill={true}
                quality={100}
                className="absolute h-[108px] w-[108px] overflow-hidden rounded-[12px] object-cover"
                loading="lazy"
                unoptimized={true}
              />
            )}
          </div>
          <div>
            <label
              htmlFor="profile-picture"
              className="mb-[8px] inline-block cursor-pointer font-semibold text-primary"
            >
              Upload your photo
            </label>
            <p className="text-[#525252]">
              Photos help your teammates recognize you.
            </p>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-[24px]">
        <div className="grid gap-x-[16px] gap-y-[24px] lg:grid-cols-2">
          <CustomInput
            placeholder="Enter username"
            label="Username"
            className="border-border bg-white"
            type="text"
            name="username"
            value={formData.username}
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
            name="jobTitle"
            value={formData.jobTitle}
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
                name="x"
                value={socialLinks.x}
                onChange={linksDataHandler}
                className="h-[40px] w-full rounded-[4px] border-[1px] border-[#cbd5e1] bg-white px-[8px] py-[12px] pl-[32px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <InstagramIcon className="absolute left-[8px] top-[50%] translate-y-[-50%]" />
              <input
                name="instagram"
                value={socialLinks.instagram}
                onChange={linksDataHandler}
                className="h-[40px] w-full rounded-[4px] border-[1px] border-[#cbd5e1] bg-white px-[8px] py-[12px] pl-[32px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="relative">
              <LinkedinIcon className="absolute left-[8px] top-[50%] translate-y-[-50%]" />
              <input
                name="linkedin"
                value={socialLinks.linkedin}
                onChange={linksDataHandler}
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

function isValidXUrl(url: string) {
  const xRegex = /^(https?:\/\/)?(www\.)?x\.com\/\w{1,15}\/?$/;
  return xRegex.test(url);
}

function isValidInstagramUrl(url: string) {
  const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[\w.]+\/?$/;
  return instagramRegex.test(url);
}
