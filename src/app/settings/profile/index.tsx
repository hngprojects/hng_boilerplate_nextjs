"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
});

const ProfileSettings = () => {
  const [file, setFile] = useState<File | undefined>();
  const MAX_BIO_LENGHT = 65;
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
    },
  });
  console.log(form.getValues());

  const handleFileChange = (entry: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = entry.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      form.setValue("image", selectedFile);
    }
  };
  return (
    <section className="flex w-full flex-col gap-[24px] p-5">
      <header className="w-full text-sm font-medium text-slate-900">
        Your photo
      </header>
      <Form {...form}>
        <form action="" className="flex flex-col gap-y-[24px]">
          <section className="mt-4 flex w-full items-center justify-start">
            <div className="flex items-center gap-[16px]">
              {file ? (
                <Image
                  width={108}
                  height={108}
                  src={URL.createObjectURL(file!)}
                  alt="Client"
                  className="max-h[108px] h-full w-full max-w-[108px] rounded-full object-cover transition-all duration-300 hover:scale-150 hover:duration-700"
                />
              ) : (
                <div className="flex flex-col justify-center whitespace-nowrap text-center text-2xl font-medium text-neutral-600 max-md:mt-4">
                  <div className="flex h-[108px] w-[108px] items-center justify-center rounded-full border border-dashed border-slate-300 bg-neutral-50 stroke-[1px] text-center max-md:px-5">
                    CN
                  </div>
                </div>
              )}

              <div className="flex flex-col items-center">
                <Label
                  htmlFor="profile-image"
                  className="flex cursor-pointer flex-col"
                >
                  <div className="text-base font-semibold leading-5 text-orange-500">
                    Upload your photo
                  </div>
                  <div className="mt-2 text-sm text-neutral-600">
                    Photos help your teammates recognize you.
                  </div>
                  <Input
                    type="file"
                    id="profile-image"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept="image/jpeg,image/png,image/svg+xml"
                    // disabled={isLoading}
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
                    placeholder="Enter Department"
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
                    placeholder="Tell us about your self and any exciting information about yourself"
                    className="h-[150px] w-full resize-none p-4 md:h-[200px]"
                  />
                </FormControl>
                <WordCounter word={field.value} length={MAX_BIO_LENGHT} />
                <FormMessage />
              </FormItem>
            )}
          />

          <section className="mt-7 flex w-full flex-col gap-3 border-t border-solid border-neutral-200 pt-6 text-sm font-medium leading-6 text-slate-400">
            <Label className="w-full text-sm text-slate-900 max-md:max-w-full">
              Social links
            </Label>
            <div className="flex w-full flex-col gap-3">
              <div className="relative flex w-full items-center">
                <Input
                  name="fullName"
                  type="url"
                  id="fullName"
                  className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 py-3 pl-[40px] text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Link to social platform"
                />
                <span className="absolute left-4 h-4 w-4 sm:right-2 sm:h-6 sm:w-6 sm:p-[2px]">
                  <LinkIcon className="h-full w-full" size={24} />
                </span>
              </div>
              <div className="relative flex w-full items-center">
                <Input
                  name="fullName"
                  type="url"
                  id="fullName"
                  className="inline-flex h-[56px] w-full items-center justify-start gap-2 rounded-lg border border-gray-200 py-3 pl-[40px] text-lg font-normal leading-relaxed text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Link to social platform"
                />
                <span className="absolute left-4 h-4 w-4 sm:right-2 sm:h-6 sm:w-6 sm:p-[2px]">
                  <LinkIcon className="h-full w-full" size={24} />
                </span>
              </div>
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
      <span className={word!.length === length ? "font-medium" : ""}>
        {word!.length}
      </span>
      <span className="font-medium dark:text-gray-200">/</span>
      <span className="font-medium text-black dark:text-gray-400">
        {length}
      </span>
    </div>
  );
};

export { ProfileSettings };
