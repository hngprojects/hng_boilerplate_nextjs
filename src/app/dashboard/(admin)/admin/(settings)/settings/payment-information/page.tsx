"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

import { Input } from "~/components/common/input";
import IntegrationCard from "~/components/common/integrationCard/IntegrationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

type platform = {
  id: number;
  heading: string;
  logo: string;
  description: string;
};

const IntegrationsPage = () => {
  const [active, setActive] = useState(["Drive", "OneDrive", "Dropbox"]);

  const platformsList: platform[] = [
    {
      id: 0,
      heading: "Drive",
      logo: "/images/platforms/drivelogo.svg",
      description:
        "Store, share and collaborate on documents and files securely",
    },
    {
      id: 1,
      heading: "OneDrive",
      logo: "/images/platforms/onedrivelogo.svg",
      description:
        "Access, share and manage your files seamlessly across devices",
    },
    {
      id: 2,
      heading: "Trello",
      logo: "/images/platforms/trellologo.svg",
      description:
        "Organize your project, track tasks and collaborate in a visual way",
    },
    {
      id: 3,
      heading: "Dropbox",
      logo: "/images/platforms/dropboxlogo.svg",
      description:
        "Securely store, sync, and share all your files and documents",
    },
    {
      id: 5,
      heading: "Atlassian",
      logo: "/images/platforms/atlassianlogo.svg",
      description:
        "Streamline project planning and manage workflows effectively",
    },
    {
      id: 6,
      heading: "Jira",
      logo: "/images/platforms/jiralogo.svg",
      description:
        "Track tasks, manage projects, and streamline team collaboration",
    },
    {
      id: 7,
      heading: "Notion",
      logo: "/images/platforms/notionlogo.svg",
      description:
        "Organize information, collaborate on projects, and create flexible workflows",
    },
    {
      id: 8,
      heading: "Microsoft teams",
      logo: "/images/platforms/teamslogo.svg",
      description:
        "Enhance team communication, and project management with Microsoft Teams",
    },
    {
      id: 9,
      heading: "Slack",
      logo: "/images/platforms/slacklogo.svg",
      description:
        "Transform team communication, enhance collaboration, and streamline workflow efficiency",
    },
  ];

  const [platforms, setPlatforms] = useState(platformsList);

  const togglePlatform = (platform: string) => {
    setActive(
      active.includes(platform)
        ? active.filter((item: string) => item !== platform)
        : [...active, platform],
    );
  };

  const searchPlatforms = (query: string) => {
    setPlatforms(
      platformsList.filter(
        (item: platform) =>
          item.heading.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-6 py-[30px]">
        <h1 className="text-3xl font-semibold">Integration</h1>
        <p>
          Supercharge your workflow and handle repetitive tasks with apps you
          use everyday
        </p>
      </div>

      <div>
        <Tabs className="w-full" defaultValue="All" color="#f2f2f2">
          <div className="flex items-center justify-between gap-6 py-2">
            <TabsList className="border bg-white">
              <TabsTrigger className="active:bg-slate-200" value="All">
                All
              </TabsTrigger>
              <TabsTrigger value="Active">Active</TabsTrigger>
              <TabsTrigger value="Inactive">Inactive</TabsTrigger>
            </TabsList>
            <div className="flex h-11 w-[40%] items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-2 text-sm font-normal placeholder:text-sm">
              <SearchIcon
                data-testid="search"
                className="h-8 w-8 text-neutral-dark-2"
              />

              <Input
                placeholder="Search"
                className="border-none focus:border-none"
                onChange={(event) => searchPlatforms(event.target.value)}
              />
            </div>
          </div>
          <TabsContent value="All">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {platforms.map((platform: platform) => (
                <IntegrationCard
                  active={active.includes(platform.heading)}
                  setActive={togglePlatform}
                  key={platform.id}
                  heading={platform.heading}
                  logo={platform.logo}
                  description={platform.description}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="Active">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {platforms
                .filter((item: platform) => active.includes(item.heading))
                .map((platform: platform) => (
                  <IntegrationCard
                    active={active.includes(platform.heading)}
                    setActive={togglePlatform}
                    key={platform.id}
                    heading={platform.heading}
                    logo={platform.logo}
                    description={platform.description}
                  />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="Inactive">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {platforms
                .filter((item: platform) => !active.includes(item.heading))
                .map((platform: platform) => (
                  <IntegrationCard
                    active={active.includes(platform.heading)}
                    setActive={togglePlatform}
                    key={platform.id}
                    heading={platform.heading}
                    logo={platform.logo}
                    description={platform.description}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IntegrationsPage;
