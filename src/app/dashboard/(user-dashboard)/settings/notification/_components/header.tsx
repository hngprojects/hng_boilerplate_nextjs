interface IProperties {
  notificationTitle: string;
}

const NotificationHeader = ({ notificationTitle }: IProperties) => {
  return (
    <h4 className="mb-[17px] text-[24px] font-[700]">{notificationTitle}</h4>
  );
};

NotificationHeader.PreviewProps = {
  notificationTitle: `Notification Alert`,
} satisfies IProperties;

export default NotificationHeader;
