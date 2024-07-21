"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link as LinkIcon, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";
import { useStateContext } from "../stateContext";

const ACCEPTED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);
const MAX_FILE_SIZE = 500_000;

const ProfileSchema = z.object({
  email: z.string().email({
    message: "invalid email address",
  }),
  username: z.string().min(4, {
    message: "invalid username",
  }),
  bio: z
    .string()
    .min(5, {
      message: "bio is too short",
    })
    .max(64, {
      message: "your bio cannot exceed 64 characters",
    }),
  department: z.string().min(3, {
    message: "invalid department",
  }),
  jobtitle: z.string().min(3, {
    message: "invalid job title",
  }),
  image: z
    .instanceof(File, { message: "Please upload a file." })
    .refine((files) => files?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.has(files?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    )
    .optional(),
  pronoun: z.enum(["he/him", "she/her", "others"], {
    message: "one is requried",
  }),
  socialLinks: z
    .array(z.string().url().min(1))
    .max(4, {
      message: "You can only add up to 4 social links.",
    })
    .optional(),
});

const ProfileSettings = () => {
  const { setShowUpdatedModal } = useStateContext();
  const [file, setFile] = useState<File | undefined>();
  const [isPending, startTransition] = useTransition();
  const MAX_BIO_LENGHT = 65;
  const [socialLinks, setSocialLinks] = useState<string[]>([]);
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      bio: "",
      department: "",
      email: "",
      image: undefined,
      jobtitle: "",
      pronoun: "others",
      username: "",
      socialLinks: [""],
    },
    mode: "onChange",
  });

  const handleSocialLinkChange = (index: number, value: string) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index] = value;
    setSocialLinks(updatedLinks);
    form.setValue("socialLinks", updatedLinks);
  };

  const addSocialLink = () => {
    if (socialLinks.length < 4) {
      setSocialLinks([...socialLinks, ""]);
      form.setValue("socialLinks", [...socialLinks, ""]);
    }
  };

  const removeSocialLink = (index: number) => {
    const updatedLinks = socialLinks.filter((_, index_) => index_ !== index);
    setSocialLinks(updatedLinks);
    form.setValue("socialLinks", updatedLinks);
  };

  const handleFileChange = (entry: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = entry.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      form.setValue("image", selectedFile);
    }
  };

  const onSubmit = (values: z.infer<typeof ProfileSchema>) => {
    startTransition(() => {
      setTimeout(() => {
        const serializedValues = JSON.stringify(values);
        window?.localStorage.setItem("profileData", serializedValues);
        setShowUpdatedModal(true);
      }, 1000);
    });
  };

  return (
    <section className="flex w-full flex-col gap-[24px] p-5">
      <header className="w-full text-sm font-medium text-slate-900">
        Your photo
      </header>
      <Form {...form}>
        <form
          action=""
          className="flex flex-col gap-y-[24px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <section className="mt-4 flex w-full items-center justify-start">
            <div className="flex items-center gap-[16px]">
              {file ? (
                <Image
                  width={108}
                  height={108}
                  src={URL.createObjectURL(file!)}
                  alt="Client"
                  className="h-full max-h-[108px] w-full max-w-[108px] rounded-full object-cover transition-all duration-300 hover:scale-150 hover:duration-700"
                />
              ) : (
                <div className="flex flex-col justify-center whitespace-nowrap text-center text-2xl font-medium text-neutral-600 max-md:mt-4">
                  <Label
                    htmlFor="profile-image"
                    className="flex h-[108px] w-[108px] cursor-pointer items-center justify-center rounded-full border border-dashed border-slate-300 bg-neutral-50 stroke-[1px] text-center max-md:px-5"
                  >
                    CN
                  </Label>
                </div>
              )}

              <div className="flex flex-col items-center">
                <Label
                  htmlFor="profile-image"
                  className="flex cursor-pointer flex-col"
                >
                  {file ? (
                    <div className="text-base font-semibold leading-5 text-orange-500">
                      Change Image
                    </div>
                  ) : (
                    <div className="text-base font-semibold leading-5 text-orange-500">
                      Upload your photo
                    </div>
                  )}
                  <div className="mt-2 text-sm text-neutral-600">
                    Photos help your teammates recognize you.
                  </div>
                  <Input
                    type="file"
                    id="profile-image"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept="image/jpeg,image/png,image/svg+xml"
                    disabled={isPending}
                  />
                </Label>
              </div>
            </div>
          </section>

          <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-start justify-start gap-1.5">
                  <Label
                    htmlFor="username"
                    className="flex items-center gap-1 text-base font-medium leading-relaxed text-[#0F172A]"
                  >
                    Username
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter Username"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pronoun"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-start justify-start gap-1.5">
                  <Label
                    htmlFor="username"
                    className="flex items-center gap-1 text-base font-medium leading-relaxed text-[#0F172A]"
                  >
                    Pronouns
                  </Label>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isPending}
                    >
                      <SelectTrigger className="h-[56px] w-full py-3">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="he/him">He/Him</SelectItem>
                        <SelectItem value="she/her">She/Her</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8 sm:flex-row">
            <FormField
              control={form.control}
              name="jobtitle"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-start justify-start gap-1.5">
                  <Label
                    htmlFor="username"
                    className="flex items-center gap-1 text-base font-medium leading-relaxed text-[#0F172A]"
                  >
                    Your job title
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter Job title"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-start justify-start gap-1.5">
                  <Label
                    htmlFor="username"
                    className="flex items-center gap-1 text-base font-medium leading-relaxed text-[#0F172A]"
                  >
                    Department
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Enter Department"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-start justify-start gap-1.5">
                <Label
                  htmlFor="username"
                  className="flex items-center gap-1 text-base font-medium leading-relaxed text-[#0F172A]"
                >
                  Your email address
                </Label>
                <FormControl>
                  <Input
                    {...field}
                    className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 px-5 py-3 text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Enter your enail"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-start justify-start gap-1.5">
                <Label
                  htmlFor="username"
                  className="flex items-center gap-1 text-base font-medium leading-relaxed text-[#0F172A]"
                >
                  Bio
                </Label>
                <FormControl>
                  <Textarea
                    {...field}
                    maxLength={MAX_BIO_LENGHT}
                    disabled={isPending}
                    placeholder="Tell us about your self and any exciting information about yourself"
                    className={cn(
                      "h-[150px] w-full resize-none p-4 md:h-[200px]",
                      field.value.length === MAX_BIO_LENGHT &&
                        "focus-visible:ring-red-500",
                    )}
                  />
                </FormControl>
                <div className="flex w-full items-center justify-center">
                  {field.value ? (
                    <FormMessage className="w-full" />
                  ) : (
                    <span
                      className={cn(
                        "w-full text-sm",
                        field.value.length === MAX_BIO_LENGHT && "text-red-500",
                      )}
                    >
                      {field.value.length === MAX_BIO_LENGHT
                        ? "your bio cannot exceed 65 characters"
                        : "Maximum of 65 characters"}
                    </span>
                  )}

                  <WordCounter word={field.value} length={MAX_BIO_LENGHT} />
                </div>
              </FormItem>
            )}
          />

          <section className="mt-7 flex w-full flex-col gap-3 border-t border-solid border-neutral-200 pt-6 text-sm font-medium leading-6 text-slate-400">
            <Label className="w-full text-sm text-slate-900 max-md:max-w-full">
              Social links
            </Label>

            <div className="flex w-full flex-col gap-3">
              {socialLinks.map((link, index) => (
                <div key={index} className="relative flex w-full items-center">
                  <Input
                    type="url"
                    disabled={isPending}
                    value={link}
                    onChange={(entires) =>
                      handleSocialLinkChange(index, entires.target.value)
                    }
                    className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 py-3 pl-[40px] text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Link to social platform"
                  />
                  <span className="absolute left-4 h-4 w-4 sm:right-2 sm:h-6 sm:w-6 sm:p-[2px]">
                    <LinkIcon className="h-full w-full" size={24} />
                  </span>
                  <button
                    type="button"
                    onClick={() => removeSocialLink(index)}
                    className="absolute right-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div>
              <Button
                type="button"
                variant="outline"
                onClick={addSocialLink}
                disabled={socialLinks.length >= 4}
                className="text-black"
              >
                Add URL
              </Button>
            </div>
            <div className="mt-6 flex w-full items-center justify-end gap-x-2 sm:gap-x-3 md:gap-x-6">
              <Button
                type="button"
                variant="outline"
                className="text-black"
                onClick={() => {
                  form.reset();
                }}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                Save Changes
              </Button>
            </div>
          </section>
        </form>
      </Form>
    </section>
  );
};

const WordCounter = ({ word, length }: { word?: string; length: number }) => {
  return (
    <div
      className={cn(
        "dark:text-color-dark flex h-[18px] w-full items-center justify-end gap-x-1 text-primary transition-opacity duration-500",
        word!.length > 0 ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <span
        className={cn(
          word!.length === length ? "font-medium text-red-500" : "",
        )}
      >
        {word!.length}
      </span>
      <span className="font-medium">/</span>
      <span
        className={cn(
          "font-medium text-black",
          word!.length === length ? "text-red-500" : "",
        )}
      >
        {length}
      </span>
    </div>
  );
};

const UpdatedModal = () => {
  const { setShowUpdatedModal, showUpdatedModal } = useStateContext();
  const [user, setUser] = useState<{
    username: string;
    email: string;
    bio: string;
    socialLinks: string[];
  }>();
  useEffect(() => {
    const readLocal = localStorage.getItem("profileData");
    if (readLocal) {
      setUser(JSON.parse(readLocal));
    }
  }, [showUpdatedModal]);
  return (
    <>
      <div
        aria-hidden
        className={cn(
          "fixed left-0 top-0 z-[99] min-h-screen w-full bg-black/40 backdrop-blur-sm transition-all duration-300",
          showUpdatedModal ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setShowUpdatedModal(false)}
      />
      <div
        role="dialog"
        aria-labelledby="create-project"
        aria-modal
        className={cn(
          "fixed left-1/2 top-1/2 z-[999] flex h-[200px] w-[90%] -translate-x-1/2 -translate-y-1/2 select-none flex-col items-center bg-white py-6 opacity-0 transition-all max-[350px]:h-[200px] min-[550px]:w-[500px] md:h-[250px] md:w-[682px]",
          showUpdatedModal
            ? "-translate-x-1/2 opacity-100 duration-700 sm:rounded-xl md:rounded-2xl"
            : "pointer-events-none -translate-x-full duration-300",
        )}
      >
        <div className="flex w-full items-center justify-between border-b border-[#e1e1e1] px-4 pb-4 pl-4 md:pl-8">
          <h3 className="font-medium sm:text-lg md:text-2xl">
            Profile Updated!
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setShowUpdatedModal(false)}
            className="text-header focus-visible:outline-primary-light rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-red-500"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex w-full flex-col gap-4 px-4 py-3">
          <h3 className="font-medium sm:text-lg md:text-2xl">
            Dear <span className="text-base capitalize">{user?.username}</span>
          </h3>
          <span className="text-sm">
            Your Profile Has been updated sucessfully
          </span>
          <div className="mt-6 flex w-full items-center justify-end gap-x-2 sm:gap-x-3 md:gap-x-6">
            <Button onClick={() => setShowUpdatedModal(false)}>Continue</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfileSettings, UpdatedModal };
