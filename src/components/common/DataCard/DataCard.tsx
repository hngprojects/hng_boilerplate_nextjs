import { cn } from "../../../lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

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
          "bg-card border-[0.5px] border-border flex flex-col w-[325px] text-[#0A0A0A] gap-1 px-6 pt-[1.4rem] pb-10 shadow-[0px_1px_18px_0px_#0A39B01F] rounded-[0.75rem]",
        )}
        aria-labelledby="card-title"
      >
        <CardHeader className="flex flex-row items-center justify-between w-full space-y-0 p-0">
          <CardTitle className="text-sm leading-[1rem] text-balance">
            {heading.title}
          </CardTitle>
          <div className="w-6 h-6" aria-label="Card Icon">
            {heading.icon}
          </div>
        </CardHeader>

        <CardContent
          className="flex flex-col items-start w-full p-0"
          aria-describedby="card-content-description"
        >
          <p className="text-2xl leading-7 font-semibold text-balance">
            {content.amount}
          </p>
          <p className="font-normal text-xs leading-[0.9rem] text-balance">
            {content.subtext}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default DataCard;
