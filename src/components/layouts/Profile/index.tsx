"use client";

import Image from "next/image";
import { useState } from "react";
import { z, ZodError } from "zod";

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
    <div className="relative w-full flex items-center border border-border rounded-md text-foreground p-2 focus-within:ring-2 focus-within:ring-ring">
      <Image
        width={24}
        height={24}
        src="/link-icon.svg"
        alt="icon"
        className="w-5 h-5 mr-2"
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
      })

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error: ZodError | Error) {
      if (error instanceof ZodError) {
        const validationErrors: Record<string, string> = {};
        for (const errorItem of error.errors) {
          validationErrors[errorItem.path.join(".")] = errorItem.message;
        }
        setErrors(validationErrors);
        console.log("errors", errors);
      } else {
        // Handle unexpected errors if needed
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 mx-2 lg:mx-28 my-5 max-w-4xl"
    >
      <div>
        <label
          htmlFor="file-input"
          className="text-primary font-medium text-sm mb-2.5"
        >
          Your Photo
        </label>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="file-input"
              name="file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <div className="w-24 h-24 bg-primary-foreground border-2 border-dashed rounded-full flex items-center justify-center overflow-hidden">
                {previewUrl ? (
                  <Image
                    width={96}
                    height={96}
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-primary font-medium text-2xl">CN</span>
                )}
              </div>
            </label>
          </div>
          <div>
            <h3 className="text-[#F97316] font-semibold">Upload your photo</h3>
            <p>Photos help your teammates recognize you.</p>
          </div>
        </div>
        {errors.file && (
          <span className="text-red-500 text-sm">{errors.file}</span>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:md-0 justify-between">
        <div className="flex flex-col gap-2 w-full max-w-[435px]">
          <label
            htmlFor="username"
            className="text-primary font-medium text-sm"
          >
            Username
          </label>
          <input
            className="w-full border border-border rounded-md text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring"
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          {errors.username && (
            <span className="text-red-500 text-sm">{errors.username}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full max-w-[435px]">
          <label
            htmlFor="pronouns"
            className="text-primary font-medium text-sm"
          >
            Pronouns
          </label>
          <select
            name="pronouns"
            id="pronouns"
            value={formData.pronouns}
            onChange={handleInputChange}
            className="w-full border border-border rounded-md text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option>select</option>
            <option>He/Him</option>
            <option>She/Her</option>
            <option>They/Them</option>
            <option>Others</option>
          </select>
          {errors.pronouns && (
            <span className="text-red-500 text-sm">{errors.pronouns}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:md-0 lg:flex-row justify-between">
        <div className="flex flex-col gap-2 w-full max-w-[435px]">
          <label
            className="text-primary font-medium text-sm"
            htmlFor="jobTitle"
          >
            Your job title
          </label>
          <input
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="w-full border border-border rounded-md text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring"
            type="text"
            placeholder="Enter job title"
          />
          {errors.jobTitle && (
            <span className="text-red-500 text-sm">{errors.jobTitle}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full max-w-[435px]">
          <label
            className="text-primary font-medium text-sm"
            htmlFor="department"
          >
            Department or team
          </label>
          <input
            name="department"
            id="department"
            value={formData.department}
            onChange={handleInputChange}
            className="w-full border border-border rounded-md text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring"
            type="text"
            placeholder="Enter department or team"
          />
          {errors.department && (
            <span className="text-red-500 text-sm">{errors.department}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-primary font-medium text-sm" htmlFor="email">
          Your email address
        </label>
        <input
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full border border-border rounded-md text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring"
          type="email"
          placeholder="Enter Email Address"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-primary font-medium text-sm" htmlFor="bio">
          Bio
        </label>
        <textarea
          name="bio"
          id="bio"
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full border border-border rounded-md text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring"
          rows={4}
          cols={50}
          style={{ resize: "none" }}
          placeholder="Type your message here"
        ></textarea>
        <p className="text-sm text-[#64748B]">Maximum of 64 character</p>
        {errors.bio && (
          <span className="text-red-500 text-sm">{errors.bio}</span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-primary font-medium text-sm" htmlFor="location">
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
                <span className="text-red-500 text-sm">{errors[errorKey]}</span>
              )}
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="py-2 px-4 rounded-md border text-sm font-medium text-primary border-border transition-transform transform hover:scale-105"
          onClick={addLinkInput}
        >
          Add URL
        </button>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button className="border border-border text-sm text-primary py-2 px-4 rounded-md transition-transform transform hover:scale-105">
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#F97316] text-sm text-primary-foreground py-2 px-4 rounded-md transition-transform transform hover:scale-105"
        >
          Save Changes
        </button>
      </div>
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
          Profile Updated successfully!
        </div>
      )}
    </form>
  );
};

export default Profile;
