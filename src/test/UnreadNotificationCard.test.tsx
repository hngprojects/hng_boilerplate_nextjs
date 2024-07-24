import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UnreadNotificationCard from "~/components/common/UnreadNotificationCard/UnreadNotificationCard";

interface NotificationPreview {
  header: string;
  time: string;
}

function renderComponents(preview: NotificationPreview[] = []) {
  render(
    <UnreadNotificationCard
      notificationsPreview={preview}
      unreadCount={preview.length}
    />,
  );
  return {
    previewCount: screen.getByTestId("unreadMessageCount"),
    previewBody: screen.getByTestId("previewBody"),
    CTAButton: screen.getByRole("button"),
    switchButton: screen.getByRole("switch"),
    cardTitle: screen.getByRole("heading"),
    cardContainer: screen.getByTestId("cardContainer"),
  };
}

describe("unreadNotificationCard without messages", () => {
  it("should display notification title", () => {
    expect.assertions(2);

    const { cardTitle } = renderComponents();

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(cardTitle).toHaveTextContent("Notifications");
  });

  it("should display 'no unread message if notificationPreview array is empty", () => {
    expect.assertions(1);

    const { previewCount } = renderComponents();

    expect(previewCount).toHaveTextContent(/0 unread messages/i);
  });

  it("should render push notification button", () => {
    expect.assertions(1);

    const { switchButton } = renderComponents();

    expect(switchButton).toBeInTheDocument();
  });

  it("should have no message in preview card body if no notification", () => {
    expect.assertions(1);

    const { previewBody } = renderComponents();
    expect(previewBody).toBeEmptyDOMElement();
  });

  it("should disabled CTA button if no unread messages", () => {
    expect.hasAssertions();

    const { CTAButton } = renderComponents();

    expect(CTAButton).toBeInTheDocument();
    expect(CTAButton).toBeDisabled();
  });
});

describe("unreadNotificationCard with Messages", () => {
  const previewMessages: NotificationPreview[] = [
    { header: "Check mail", time: "1 hour ago" },
    { header: "Sign up for offer", time: "2 hours ago" },
    { header: "Register for event", time: "1 hour ago" },
  ];

  it("should display '1 unread message if notificationPreview array has one message", () => {
    expect.assertions(1);

    const preview: NotificationPreview[] = [
      { header: "Sign up for offer", time: "2 hours ago" },
    ];

    const { previewCount } = renderComponents(preview);

    expect(previewCount).toHaveTextContent(/1 unread message/i);
  });

  it("should display '3 unread messages' if notificationPreview array has three message", () => {
    expect.assertions(1);

    const preview: NotificationPreview[] = [
      { header: "Check mail", time: "1 hour ago" },
      { header: "Sign up for offer", time: "2 hours ago" },
      { header: "Register for event", time: "1 hour ago" },
    ];

    const { previewCount } = renderComponents(preview);

    expect(previewCount).toHaveTextContent(/3 unread messages/i);
  });

  describe.each(previewMessages)(
    "unreadNotificationCard with messages",
    (message) => {
      it(`should display preview with header "${message.header}" and time "${message.time}"`, () => {
        expect.assertions(4);

        const index = previewMessages.indexOf(message);

        render(
          <UnreadNotificationCard
            notificationsPreview={previewMessages}
            unreadCount={previewMessages.length}
          />,
        );

        const header = screen.getByTestId(`previewHeader${index}`);
        const time = screen.getByTestId(`previewTime${index}`);

        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent(message.header);

        expect(time).toBeInTheDocument();
        expect(time).toHaveTextContent(message.time);
      });
    },
  );

  it("should enable CTA button if there are unread messages", () => {
    expect.assertions(2);

    const { CTAButton } = renderComponents(previewMessages);

    expect(CTAButton).toBeInTheDocument();
    expect(CTAButton).toBeEnabled();
  });
});

describe("unreadNotificationCard responsiveness", () => {
  const previewMessages: NotificationPreview[] = [
    { header: "Check mail", time: "1 hour ago" },
    { header: "Sign up for offer", time: "2 hours ago" },
    { header: "Register for event", time: "1 hour ago" },
  ];

  it("should render all required elements correctly on smaller screen sizes", () => {
    expect.assertions(5);

    global.innerWidth = 320;
    global.dispatchEvent(new Event("resize"));

    const { previewCount, previewBody, CTAButton, switchButton, cardTitle } =
      renderComponents();

    expect(previewCount).toBeInTheDocument();
    expect(previewBody).toBeInTheDocument();
    expect(CTAButton).toBeInTheDocument();
    expect(switchButton).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
  });

  describe.each(previewMessages)(
    "unreadNotificationCard with messages",
    (message) => {
      it(`should display preview with header "${message.header}" and time "${message.time}"`, () => {
        expect.assertions(4);

        global.innerWidth = 320;
        global.dispatchEvent(new Event("resize"));

        const index = previewMessages.indexOf(message);

        render(
          <UnreadNotificationCard
            notificationsPreview={previewMessages}
            unreadCount={previewMessages.length}
          />,
        );

        const header = screen.getByTestId(`previewHeader${index}`);
        const time = screen.getByTestId(`previewTime${index}`);

        expect(header).toBeInTheDocument();
        expect(header).toHaveTextContent(message.header);
        expect(time).toBeInTheDocument();
        expect(time).toHaveTextContent(message.time);
      });
    },
  );
});

describe("unreadNotificationCard style ", () => {
  it("should have the correct card style ", () => {
    expect.assertions(1);

    const { cardContainer } = renderComponents();

    expect(cardContainer).toHaveClass(
      "bg-card w-fit text-card-foreground sm:w-[380px]",
    );
  });

  it("should have the correct CTAbutton color ", () => {
    expect.assertions(1);

    const { CTAButton } = renderComponents();

    expect(CTAButton).toHaveClass("bg-primary w-full");
  });

  it("should have the correct switch color ", () => {
    expect.assertions(1);

    const { switchButton } = renderComponents();

    expect(switchButton).toHaveClass(
      "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
    );
  });
});
