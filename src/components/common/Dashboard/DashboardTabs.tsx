import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const index = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 data-testid="tab" className="text-3xl font-semibold">
        Dashboard
      </h1>
      <Tabs defaultValue="overview" className="w-[400px]">
        <TabsList data-testid="tab" className="bg-white px-[5px] py-[4px]">
          <TabsTrigger aria-label="tab 1" role="tab" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger aria-label="tab 2" role="tab" value="analytics">
            Analytics
          </TabsTrigger>
          <TabsTrigger aria-label="tab 3" role="tab" value="reports">
            Reports
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent role="tabpanel" value="overview">
            Make changes to the overview here.
          </TabsContent>
          <TabsContent role="tabpanel" value="analytics">
            Change your analytics content here.
          </TabsContent>
          <TabsContent role="tabpanel" value="reports">
            Change your report content here.
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default index;
