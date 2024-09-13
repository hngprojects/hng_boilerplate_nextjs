import { Separator } from "~/components/ui/separator";

interface IProperties {
  notificationTitle: string;
}

const NotificationHeader = ({ notificationTitle }: IProperties) => {
  return (
    <header className="mb-[17px] text-[18px] font-[700] md:text-[24px]">
      <h4 className="mb-[5px] px-[24px] md:px-0">{notificationTitle}</h4>
      <Separator className="bg-[#BCBCBC66] md:hidden" />
    </header>
  );
};

NotificationHeader.PreviewProps = {
  notificationTitle: `Notification Alert`,
} satisfies IProperties;

export default NotificationHeader;
