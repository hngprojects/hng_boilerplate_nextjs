"use client";

import { useState } from "react";

import CardPlatform from "~/components/card/card-platform";
import { cn } from "~/lib/utils";

const mockupPlatforms: PlatformCardProperties[] = [
  {
    id: 1,
    heading: "Drive",
    logo: "/images/integration/gdrive.svg",
    description:
      "Store, share, and collaborate on documents and files securely",
    isActive: false,
  },
  {
    id: 2,
    heading: "Dropbox",
    logo: "/images/integration/dropbox.svg",
    description: "Securely store, sync, and share all your files and documents",
    isActive: true,
  },
  {
    id: 3,
    heading: "Notion",
    logo: "/images/integration/notion.svg",
    description:
      "Organize information, collaborate on projects, and create flexible workflows",
    isActive: false,
  },
  {
    id: 4,
    heading: "OneDrive",
    logo: "/images/integration/onedrive.svg",
    description:
      "Access, share, and manage your files seamlessly across devices",
    isActive: true,
  },
  {
    id: 5,
    heading: "Atlassian",
    logo: "/images/integration/atlassian.svg",
    description: "Streamline project planning and manage workflows effectively",
    isActive: true,
  },
  {
    id: 6,
    heading: "MicrosoftTeams",
    logo: "/images/integration/ms-office-teams.svg",
    description:
      "Enhance team communication and project management with Microsoft Teams",
    isActive: true,
  },
  {
    id: 7,
    heading: "Trello",
    logo: "/images/integration/trello.svg",
    description:
      "Organize your projects, track tasks, and collaborate in a visual way",
    isActive: true,
  },
  {
    id: 8,
    heading: "Jira",
    logo: "/images/integration/jira.svg",
    description:
      "Track tasks, manage projects, and streamline team collaboration",
    isActive: true,
  },
  {
    id: 9,
    heading: "Slack",
    logo: "/images/integration/slack.svg",
    description:
      "Transform team communication, enhance collaboration, and streamline workflow efficiency",
    isActive: true,
  },
];

export default function Integration() {
  const [platforms, setPlatforms] = useState(mockupPlatforms);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const togglePlatformActive = (id: number | string) => {
    setTimeout(() => {
      setPlatforms(
        platforms.map((platform) =>
          platform.id === id
            ? { ...platform, isActive: !platform.isActive }
            : platform,
        ),
      );
    }, 500);
  };

  const filteredPlatforms = platforms.filter((platform) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && platform.isActive) ||
      (filter === "inactive" && !platform.isActive);

    const matchesSearch = platform.heading
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  return (
    <div className="px-[32px] py-[22px]">
      <header className="mb-[24px]">
        <div className="mb-[53px]">
          <h1 className="mb-[12px] text-[28px] font-semibold text-[#0f172A]">
            Integration
          </h1>
          <p className="text-[12px] text-[#0f172A]">
            Supercharge your workflow and handle repititive tasks with apps you
            use every day
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5 lg:flex-row">
          <div className="whitespace-nowrap rounded-[5px] border-[1px] border-[#cbd5e1] bg-white px-[5px] py-[4px] text-[14px]">
            <button
              className={cn(
                "rounded-[4px] px-4 py-2",
                filter === "all" ? "bg-gray-200 text-black" : "bg-white",
              )}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={cn(
                "rounded-[4px] px-4 py-2",
                filter === "active" ? "bg-gray-200 text-black" : "bg-white",
              )}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={cn(
                "rounded-[4px] px-4 py-2",
                filter === "inactive" ? "bg-gray-200 text-black" : "bg-white",
              )}
              onClick={() => setFilter("inactive")}
            >
              Inactive
            </button>
          </div>
          <div className="flex h-[40px] max-w-[456px] flex-1 gap-[8px] rounded-[6px] border-[1px] border-[#cdd5e1] p-[8px]">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 rounded border-none bg-transparent py-1 outline-none"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
        </div>
      </header>
      <div className="grid gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
        {filteredPlatforms.map((data) => (
          <CardPlatform
            heading={data.heading}
            description={data.description}
            logo={data.logo}
            key={data.id}
            isActive={data.isActive}
            toggleSwitchHandler={() => togglePlatformActive(data.id)}
          />
        ))}
      </div>
    </div>
  );
}

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="#525252"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 21.0004L16.6499 16.6504"
        stroke="#525252"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface PlatformCardProperties {
  /**
   * Unique identifier.
   */
  id: string | number;
  /**
   * Displaying the platform title.
   */
  heading: string;
  /**
   * Displaying the platform logo or icon.
   */
  logo: string;
  /**
   * Providing a brief overview of the platform.
   */
  description: string;
  /**
   * active status of the platform, true or false.
   */
  isActive: boolean;
}
