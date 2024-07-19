import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";

type CardProperties = React.ComponentProps<typeof Card>;

export type WaitlistCardProps = CardProperties & {
  cardTitle: string;
  cardDescription: string;
  cardIcon: string;
};

const waitlistBorderStyle = "border-[1px] border-[#525252] border-solid";
const ellipse =
  "inline bg-[#F97316] h-[53px] w-[53px] rounded-[9999px] flex justify-center items-center mb-[12px]";

const WaitlistCard = ({
  className,
  cardTitle,
  cardDescription,
  cardIcon,
  ...properties
}: WaitlistCardProps) => {
  return (
    <Card
      className={cn(
        `w-[100%] bg-[#fafafa] md:w-[320px] ${waitlistBorderStyle}`,
        className,
      )}
      {...properties}
    >
      <CardHeader className={cn("p-24px")}>
        <div className={ellipse}>
          <Image
            className="h-[22.5px] w-[22.5px]"
            width={22.5}
            height={22.5}
            role="image"
            src={cardIcon}
            alt="Waitlist card icon"
            title="Icon"
          />
        </div>
        <CardTitle
          role="cardTitle"
          className={cn("text-[18px] text-[#525252]")}
        >
          {cardTitle}
        </CardTitle>
        <CardDescription
          role="cardDescription"
          className={cn("text-[14px] leading-[20px]")}
        >
          {cardDescription}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default WaitlistCard;
