import Image from "next/image";
import { FC } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardProperties {
  title: string;
  value: string;
  description: string;
  icon: string;
}

const CardComponent: FC<CardProperties> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <Card className="border border-[#CBD5E1] bg-white shadow-md">
      <CardHeader>
        <CardTitle className="flex justify-between text-[12px] text-neutral-950">
          {title}
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="mr-2"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[24px] font-semibold">{value}</p>
        <p className="text-sm text-[#525252]">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
