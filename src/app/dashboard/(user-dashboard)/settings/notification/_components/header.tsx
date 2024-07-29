interface IProperties {
  notificationTitle: string;
}

const NotificationHeader = ({ notificationTitle }: IProperties) => {
  return (
    <h4 className="mb-[17px] text-[18px] font-[700] md:text-[24px]">
      {notificationTitle}
    </h4>
  );
};

NotificationHeader.PreviewProps = {
  notificationTitle: `Notification Alert`,
} satisfies IProperties;

export default NotificationHeader;
