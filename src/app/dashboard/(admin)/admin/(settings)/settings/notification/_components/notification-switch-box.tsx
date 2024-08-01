import { Switch } from "~/components/ui/switch";
import { notificationSettingsProperties } from "../_types/notification-settings.types";

interface IProperties {
  title: string;
  description: string;
  name: keyof notificationSettingsProperties;
  isChecked: boolean;
  onToggle: (name: keyof notificationSettingsProperties) => void;
  className?: string;
}

export const NotificationSwitchBox = ({
  title,
  description,
  name,
  isChecked,
  onToggle,
}: IProperties) => {
  return (
    <section className="flex w-full items-center justify-between md:gap-[5rem] lg:gap-[15rem] xl:gap-[25rem]">
      <div className="mx-[24px] md:mx-0">
        <p className="mb-[8px] text-[12px] font-[600] md:text-[16px]">
          {title}
        </p>
        <p className="text-[10px] text-neutral-dark-1 md:text-[14px]">
          {description}
        </p>
      </div>
      <div>
        <Switch checked={isChecked} onCheckedChange={() => onToggle(name)} />
      </div>
    </section>
  );
};
