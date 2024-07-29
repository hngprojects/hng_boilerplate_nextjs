import { Switch } from "~/components/ui/switch";

interface IProperties {
  title: string;
  description: string;
}

const NotificationSwitchBox = ({ title, description }: IProperties) => {
  return (
    <section className="flex w-full items-center justify-between">
      <div className="w-[55%]">
        <p className="mb-[8px] font-[600]">{title}</p>
        <p className="text-[14px] text-neutral-dark-1">{description}</p>
      </div>
      <div>
        <Switch />
      </div>
    </section>
  );
};

export default NotificationSwitchBox;
