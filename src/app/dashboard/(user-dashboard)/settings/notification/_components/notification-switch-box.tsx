import { Switch } from "~/components/ui/switch";

interface IProperties {
  title: string;
  description: string;
}

const NotificationSwitchBox = ({ title, description }: IProperties) => {
  return (
    <section className="flex w-full items-center justify-between">
      <div className="w-[70%] md:w-[55%]">
        <p className="mb-[8px] text-[12px] font-[600] md:text-[14px]">
          {title}
        </p>
        <p className="text-[10px] text-neutral-dark-1 md:text-[14px]">
          {description}
        </p>
      </div>
      <div>
        <Switch />
      </div>
    </section>
  );
};

export default NotificationSwitchBox;
