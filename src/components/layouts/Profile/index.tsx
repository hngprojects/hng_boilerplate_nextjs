"use client";

import Image from "next/image";
import { useState } from "react";
import { z, ZodError } from "zod";

import CustomButton from "~/components/common/Button/button";

const settingsSchema = z.object({
  username: z.string().min(1, "Username is required"),
  pronouns: z.enum(["He/Him", "She/Her", "They/Them", "Others"], {
    errorMap: () => ({ message: "Please select a pronoun" }),
  }),
  jobTitle: z.string().min(1, "Job title is required"),
  department: z.string().min(1, "Department or team is required"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(64, "Maximum of 64 characters"),
  links: z.array(z.string().url("Invalid URL")),
  file: z
    .instanceof(File)
    .refine(
      (file: File) => file.size <= 5_000_000,
      "File size must be less than 5MB",
    )
    .nullable()
    .optional(),
});

interface LinkInputProperties {
  value: string;
  index: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const LinkInput: React.FC<LinkInputProperties> = (
  properties: LinkInputProperties,
) => {
  const { value, index, onChange } = properties;
  return (
    <div className="relative flex w-full items-center rounded-md border border-border p-2 text-foreground focus-within:ring-2 focus-within:ring-ring">
      <Image
        width={24}
        height={24}
        src="/link-icon.svg"
        alt="icon"
        className="mr-2 h-5 w-5"
      />
      <input
        className="flex-grow focus:outline-none"
        name={`links.${index}`}
        id={`links.${index}`}
        type="url"
        placeholder="Link to Social Platform"
        value={value}
        onChange={(event) => onChange(event, index)}
      />
    </div>
  );
};

const Profile = () => {
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [linkInputs, setLinkInputs] = useState<string[]>(["", ""]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    pronouns: "select",
    jobTitle: "",
    department: "",
    email: "",
    bio: "",
    links: ["", ""],
    file: undefined as File | undefined,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setFormData((previousFormData) => ({
        ...previousFormData,
        file: file,
      }));
    }
  };

  const addLinkInput = () => {
    setLinkInputs([...linkInputs, ""]);
    setFormData((previousFormData) => ({
      ...previousFormData,
      links: [...previousFormData.links, ""],
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index?: number,
  ) => {
    const { name, value } = event.target;
    if (name === "bio") {
      setFormData({ ...formData, bio: value.slice(0, 64) });
    } else if (name.startsWith("link") && index !== undefined) {
      const links = [...formData.links];
      links[index] = value;
      setFormData({ ...formData, links });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      settingsSchema.parse(formData);
      setErrors({});
      setFormData({
        username: "",
        pronouns: "select",
        jobTitle: "",
        department: "",
        email: "",
        bio: "",
        links: ["", ""],
        file: undefined as File | undefined,
      });

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors: Record<string, string> = {};
        for (const errorItem of error.errors) {
          validationErrors[errorItem.path.join(".")] = errorItem.message;
        }
        setErrors(validationErrors);
      } else {
        // console.error(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-2 my-5 flex max-w-4xl flex-col gap-6 lg:mx-28"
    >
      <div>
        <label
          htmlFor="file-input"
          className="mb-2.5 text-sm font-medium text-foreground"
        >
          Your Photo
        </label>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="file-input"
              name="file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed bg-primary-foreground">
                {previewUrl ? (
                  <Image
                    width={96}
                    height={96}
                    src={previewUrl}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-medium text-primary">CN</span>
                )}
              </div>
            </label>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Upload your photo</h3>
            <p>Photos help your teammates recognize you.</p>
          </div>
        </div>
        {errors.file && (
          <span className="text-sm text-red-500">{errors.file}</span>
        )}
      </div>
      <div className="lg:md-0 flex flex-col justify-between gap-6 lg:flex-row">
        <div className="flex w-full max-w-[435px] flex-col gap-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-foreground"
          >
            Username
          </label>
          <input
            className="w-full rounded-md border border-border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && (
            <span className="text-sm text-red-500">{errors.username}</span>
          )}
        </div>
        <div className="flex w-full max-w-[435px] flex-col gap-2">
          <label
            htmlFor="pronouns"
            className="text-sm font-medium text-foreground"
          >
            Pronouns
          </label>
          <select
            name="pronouns"
            id="pronouns"
            value={formData.pronouns}
            onChange={handleInputChange}
            className="w-full rounded-md border border-border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option>select</option>
            <option>He/Him</option>
            <option>She/Her</option>
            <option>They/Them</option>
            <option>Others</option>
          </select>
          {errors.pronouns && (
            <span className="text-sm text-red-500">{errors.pronouns}</span>
          )}
        </div>
      </div>
      <div className="lg:md-0 flex flex-col justify-between gap-6 lg:flex-row">
        <div className="flex w-full max-w-[435px] flex-col gap-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="jobTitle"
          >
            Your job title
          </label>
          <input
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="w-full rounded-md border border-border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            type="text"
            placeholder="Enter job title"
          />
          {errors.jobTitle && (
            <span className="text-sm text-red-500">{errors.jobTitle}</span>
          )}
        </div>
        <div className="flex w-full max-w-[435px] flex-col gap-2">
          <label
            className="text-sm font-medium text-foreground"
            htmlFor="department"
          >
            Department or team
          </label>
          <input
            name="department"
            id="department"
            value={formData.department}
            onChange={handleInputChange}
            className="w-full rounded-md border border-border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            type="text"
            placeholder="Enter department or team"
          />
          {errors.department && (
            <span className="text-sm text-red-500">{errors.department}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="email">
          Your email address
        </label>
        <input
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full rounded-md border border-border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          type="email"
          placeholder="Enter Email Address"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="bio">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full rounded-md border border-border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          rows={4}
          cols={50}
          style={{ resize: "none" }}
          placeholder="Type your message here"
        ></textarea>
        <p className="text-sm text-muted-foreground">Maximum of 64 character</p>
        {errors.bio && (
          <span className="text-sm text-red-500">{errors.bio}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-foreground"
          htmlFor="location"
        >
          Social Links
        </label>
        {linkInputs.map((link, index) => {
          const errorKey = `links.${index}`;
          return (
            <div key={index}>
              <LinkInput
                value={formData.links[index]}
                index={index}
                onChange={handleInputChange}
              />
              {errors[errorKey] && (
                <span className="text-sm text-red-500">{errors[errorKey]}</span>
              )}
            </div>
          );
        })}
      </div>
      <div onClick={addLinkInput}>
        <CustomButton
          variant="outline"
          isLeftIconVisible={false}
          isLoading={false}
          isDisabled={false}
        >
          Add URL
        </CustomButton>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <CustomButton
          variant="outline"
          isLeftIconVisible={false}
          isLoading={false}
          isDisabled={false}
        >
          Cancel
        </CustomButton>
        <div onClick={handleSubmit}>
          <CustomButton
            variant="primary"
            isLeftIconVisible={false}
            isLoading={false}
            isDisabled={false}
          >
            Save Changes
          </CustomButton>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 rounded bg-green-500 p-4 text-white">
          Profile Updated successfully!
        </div>
      )}
    </form>
  );
};

export default Profile;
