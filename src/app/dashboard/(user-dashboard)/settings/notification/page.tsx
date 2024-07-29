"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import NotificationSettingSavedModal from "~/components/common/modals/notification-settings-saved";
import NotificationHeader from "./_components/header";
import NotificationSwitchBox from "./_components/notification-switch-box";

const NotificationPage = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <main className="text-neutral-dark-2">
      {/* NOTIFICATION ALERT */}
      <section>
        <NotificationHeader notificationTitle={"Notification Alert"} />
        <NotificationSwitchBox
          title={"Mobile push notifications"}
          description={
            "Receive push notifications on mentions and comments via your mobile app"
          }
        />
      </section>
      {/* EMAIL NOTIFICATION */}
      <section className="my-[30px]">
        <NotificationHeader notificationTitle={"Email notifications"} />
        <section className="flex flex-col gap-[24px]">
          {/* option 1 */}
          <div>
            <NotificationSwitchBox
              title={"Activity in your workspace"}
              description={
                "Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes"
              }
            />
          </div>
          {/* option 2 */}
          <div>
            <NotificationSwitchBox
              title={"Activity in your workspace"}
              description={
                "Receive emails about activity in your workspace, even when you are active on the app"
              }
            />
          </div>
          {/* option 3 */}
          <div>
            <NotificationSwitchBox
              title={"Email digests"}
              description={
                "Receive email digest every 8 hours for changes to pages you are subscribed to"
              }
            />
          </div>
          {/* option 4 */}
          <div>
            <NotificationSwitchBox
              title={"Announcements and update emails"}
              description={
                "Receive occasional emails about product launches and new features from notion"
              }
            />
          </div>
        </section>
      </section>
      {/* SLACK NOTIFICATIONS */}
      <section className="my-[30px]">
        <NotificationHeader notificationTitle={"Slack notifications"} />
        <section className="flex flex-col gap-[24px]">
          {/* option 1 */}
          <div>
            <NotificationSwitchBox
              title={"Activity in your workspace"}
              description={
                "Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes"
              }
            />
          </div>
          {/* option 2 */}
          <div>
            <NotificationSwitchBox
              title={"Always send email notifications"}
              description={
                "Receive emails about activity in your workspace, even when you are active on the app"
              }
            />
          </div>
          {/* option 3 */}
          <div>
            <NotificationSwitchBox
              title={"Announcements and update emails"}
              description={
                "Receive email digest every 8 hours for changes to pages you are subscribed to"
              }
            />
          </div>
        </section>
      </section>
      <section className="text-end">
        <CustomButton
          variant="primary"
          icon={<Check />}
          isLeftIconVisible={true}
          isLoading={false}
          isDisabled={false}
          onClick={handleOpenModal}
        >
          Save Changes
        </CustomButton>
        <NotificationSettingSavedModal
          show={isOpen}
          onClose={function (): void {
            setOpen(false);
          }}
        />
      </section>
    </main>
  );
};

export default NotificationPage;
