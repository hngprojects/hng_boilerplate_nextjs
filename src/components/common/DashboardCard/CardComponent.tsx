import { ComponentProps, FC } from "react";

import Icon from "~/components/common/lucide-icon";

interface CardProperties {
  title: string;
  value: string | number;
  description: string;
  icon: ComponentProps<typeof Icon>["name"];
}

const CardComponent: FC<CardProperties> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <div className="w-full rounded-xl bg-white px-[24px] pb-[28px] pt-[23px] shadow-spread ring-1 ring-border">
      <div className="flex flex-row items-center justify-between">
        <h4 className="text-sm font-[500] leading-[16.94px] text-neutral-dark-2">
          {title}
        </h4>
        <Icon name={icon} width={24} height={24} className="mr-2" />
      </div>

      <div className="mt-1">
        <h2 className="text-2xl font-semibold leading-[29.05px] text-neutral-dark-2">
          {value}
        </h2>
        <small className="mt-0 text-xs leading-[14.52px] text-neutral-dark-1">
          {description}
        </small>
      </div>
    </div>
  );
};

export default CardComponent;
