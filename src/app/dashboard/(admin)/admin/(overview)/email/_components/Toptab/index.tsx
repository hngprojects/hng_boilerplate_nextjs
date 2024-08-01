import { FC, ReactNode } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

interface ITab {
  name: string;
  value: string;
  content: ReactNode;
}

interface IProperties {
  tabs: ITab[];
}

const Toptab: FC<IProperties> = ({ tabs }) => {
  return (
    <Tabs defaultValue={tabs[0].value}>
      <TabsList className="mb-6 rounded-[8px] border-[1px] border-[#CBD5E1B2]/70 bg-transparent p-0">
        {tabs?.map((tab, item) => {
          return (
            <TabsTrigger
              data-testid="trigger-btn"
              key={item}
              value={tab.value}
              className="rounded-none bg-transparent text-sm text-[#8E8E93] data-[state=active]:bg-[#F6F7F9] data-[state=active]:text-primary"
            >
              {tab.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {tabs?.map((tab, item) => {
        return (
          <TabsContent
            data-testid="toptab-content"
            key={item}
            value={tab.value}
            className="w-auto"
          >
            {tab.content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default Toptab;
