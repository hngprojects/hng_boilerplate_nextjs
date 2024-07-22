import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export type HeadingProperties = {
  title: string;
  icon: React.ReactNode;
};

export type ContentProperties = {
  amount: string;
  subtext: string;
};

export type DataCardProperties = {
  heading: HeadingProperties;
  content: ContentProperties;
};

const DataCard = ({ heading, content }: DataCardProperties) => {
  return (
    <>
      <Card
        className={cn(
          "flex flex-col gap-1 rounded-[0.75rem] border-[0.5px] border-border bg-card px-6 pb-10 pt-[1.4rem] text-neutral-dark-2",
        )}
        style={{ boxShadow: "0px 1px 18px 0px hsla(226, 89%, 36%, 0.12)" }}
        aria-labelledby="card-title"
      >
        <CardHeader className="flex w-full flex-row items-center justify-between space-y-0 p-0">
          <CardTitle className="text-balance text-sm leading-[1rem]">
            {heading.title}
          </CardTitle>
          <div className="h-6 w-6" aria-label="Card Icon">
            {heading.icon}
          </div>
        </CardHeader>

        <CardContent
          className="flex w-full flex-col items-start p-0"
          aria-describedby="card-content-description"
        >
          <p className="text-balance text-2xl font-semibold leading-7">
            {content.amount}
          </p>
          <p className="text-balance text-xs font-normal leading-[0.9rem]">
            {content.subtext}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default DataCard;
