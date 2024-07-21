import {
  Body,
  Button,
  Font,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

interface EmailTemplateProperties {
  title: string;
  name: string;
  image: boolean;
  date: string;
  plan: string;
  reactivateLink: string;
  upgradeLink: string;
}

const EmailTemplate: React.FC<EmailTemplateProperties> = ({
  title,
  name,
  image = true,
  date,
  plan,
  reactivateLink,
  upgradeLink,
}) => {
  const emailTitle = title || "Subscription Renewal Disabled";
  const userName = name || "John Doe";
  const subscriptionDate = date || "17th August, 2024";
  const currentPlan = plan || "Bi-monthly Features";
  const reactivateURL = reactivateLink || "Reactivate Subscription";
  const upgradeURL = upgradeLink || "Upgrade Plan";

  const button = {
    border: "1px solid #F97316",
  };

  return (
    <Html>
      <TailwindWrapper>
        <Head>
          <Preview>Subcription Renewal Disabled</Preview>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
              format: "woff2",
            }}
          />
        </Head>
        <Body className="mx-auto flex h-[1500px] w-[430px] flex-col items-center md:h-[1250px] md:w-[790px]">
          <Section className="mx-auto flex h-[122px] w-full items-center justify-center bg-[#E1D6D666] px-0 text-center md:h-[122px] md:w-[790px]">
            <div className="relative flex h-[29px] w-[160px] items-center gap-[10px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#F97316" />
                <circle cx="14" cy="4" r="4" fill="#F97316" />
                <circle cx="4" cy="14" r="4" fill="#F97316" />
                <circle cx="14" cy="14" r="4" fill="#F97316" />
              </svg>
              <p className="font-inter text-center text-[24px] font-semibold leading-[29.05px]">
                Boilerplate.
              </p>
            </div>
          </Section>

          <Section className="flex justify-center">
            <Img
              src="https://i.ibb.co/4T072wz/banner.png"
              width={178}
              height={178}
              alt="Banner"
              className={`h-[142px] w-[142px] pt-14 md:h-[178px] md:w-[178px] ${image ? "" : "hidden"}`}
            />
          </Section>

          <Section className="mb-6 flex w-full items-center justify-center pt-10 sm:mb-0 md:h-[29px] md:w-[678px] md:pb-14 md:pt-14">
            <Text className="font-inter h-[48px] w-[280px] px-[20px] text-center text-[20px] font-semibold leading-[29.05px] text-[#0A0A0A] sm:text-[16px] md:h-auto md:w-full md:text-[24px] md:opacity-100">
              {emailTitle}
            </Text>
          </Section>

          <Section className="pl-[56px] pr-[56px]">
            <Text className="font-inter pb-4 text-left text-[14px] font-semibold leading-[16.34px] text-[#111111] md:pb-0 md:text-[18px] md:leading-[21.78px]">
              Hi {userName},
            </Text>

            <Text className="font-inter w-[334px] pb-4 text-left text-[16px] font-normal leading-[19.36px] md:w-[678px] md:pb-0">
              As requested, your next subscription renewal for{" "}
              <span className="font-semibold">{currentPlan}</span> has been
              disabled. You will continue to enjoy benefits of this subscription
              until <span>{subscriptionDate}</span>.
            </Text>
            <Text className="font-inter w-[334px] pb-4 text-left text-[16px] font-normal leading-[19.36px] md:w-[678px] md:pb-4">
              We are so sad to see you go. However, if you change your mind, you
              can always reactivate your subscription or upgrade your
              subscription plan.
            </Text>
          </Section>

          <Section className="mb-[32px] pl-[56px] pr-[56px]">
            <div className="mx-auto flex h-[108px] w-[318px] flex-col gap-[20px] md:h-[44px] md:w-[421px] md:flex-row md:gap-[20px]">
              <Button
                href="https://example.com/reactivate"
                className="flex h-[44px] w-[265px] cursor-pointer items-center justify-center rounded-b-[8px] rounded-t-[8px] border-0 bg-[#F97316] text-[16px] text-[#FFFFFF] md:h-[44px] md:w-[265px] lg:w-[318px]"
              >
                {reactivateURL}
              </Button>

              <Button
                href="https://example.com/upgrade"
                style={button}
                className="flex h-[42px] w-[134px] cursor-pointer items-center justify-center rounded-b-[8px] rounded-t-[8px] text-[16px] text-[#F97316] md:h-[42px] md:w-[136px] lg:w-[316px]"
              >
                {upgradeURL}
              </Button>
            </div>
          </Section>

          <Section className="pl-[56px] pr-[56px]">
            <Text className="font-inter w-[334px] text-left text-[14px] font-medium leading-loose text-[#111111] md:w-[678px]">
              Regards, <br />
              Boilerplate
            </Text>
          </Section>

          <Section className="pb-10 pl-[56px] pr-[56px] md:pb-0">
            <Text className="font-inter w-[334px] text-left text-base font-normal leading-[19.36px] text-[#111111] md:w-[678px]">
              If you have questions, please visit our{" "}
              <span className="text-base font-semibold leading-relaxed text-[#F97316]">
                <a
                  className="text-base font-semibold leading-relaxed text-[#F97316] no-underline"
                  href=""
                >
                  FAQs
                </a>
              </span>
              , or email us at{" "}
              <span className="text-base leading-relaxed text-[#F97316]">
                help@boilerplate.com
              </span>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <span className="font-inter text-left text-base font-normal leading-[19.36px] text-[#111111]">
                {" "}
                <a
                  className="font-inter text-left text-base font-semibold leading-[19.36px] text-[#111111]"
                  href=""
                >
                  click here
                </a>
              </span>
              .
            </Text>
          </Section>

          <Section className="flex flex-col items-center md:w-[790px]">
            <footer className="flex h-[266px] w-[410px] flex-col items-center bg-[#F3EFEF] pb-[8px] pt-[32px] md:w-[790px]">
              <div className="mb-8 flex h-[24px] w-[328px] items-center justify-center gap-[33px] md:w-[694px]">
                <svg
                  className="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10571_3956)">
                    <path
                      d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                      fill="#5B5B5D"
                    />
                    <path
                      d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                      fill="#5B5B5D"
                    />
                    <path
                      d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                      fill="#5B5B5D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10571_3956">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  className="cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10571_3964)">
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                      fill="#5B5B5D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10571_3964">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  className="cursor-pointer"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.4375 2.65873C12.6456 3.54092 13.4378 4.19811 14.3838 4.19811C15.4881 4.19811 16.3834 3.30279 16.3834 2.19842C16.3834 1.09404 15.4881 0.19873 14.3838 0.19873C13.4181 0.19873 12.6128 0.883106 12.4253 1.79342C10.8081 1.96686 9.54531 3.33842 9.54531 5.00061C9.54531 5.00436 9.54531 5.00717 9.54531 5.01092C7.78656 5.08498 6.18062 5.58561 4.90562 6.37592C4.43219 6.00936 3.83781 5.79092 3.19281 5.79092C1.645 5.79092 0.390625 7.04529 0.390625 8.59311C0.390625 9.71623 1.05062 10.6837 2.00406 11.1309C2.09688 14.384 5.64156 17.0006 10.0019 17.0006C14.3622 17.0006 17.9116 14.3812 17.9997 11.1253C18.9456 10.6753 19.6 9.71061 19.6 8.59404C19.6 7.04623 18.3456 5.79186 16.7978 5.79186C16.1556 5.79186 15.5641 6.00842 15.0916 6.37217C13.8053 5.57623 12.1816 5.07561 10.405 5.00904C10.405 5.00623 10.405 5.00436 10.405 5.00154C10.405 3.81092 11.29 2.82279 12.4375 2.66061V2.65873ZM4.79313 10.3715C4.84 9.35529 5.515 8.57529 6.29969 8.57529C7.08438 8.57529 7.68438 9.39936 7.6375 10.4156C7.59063 11.4319 7.00469 11.8012 6.21906 11.8012C5.43344 11.8012 4.74625 11.3878 4.79313 10.3715ZM13.705 8.57529C14.4906 8.57529 15.1656 9.35529 15.2116 10.3715C15.2584 11.3878 14.5703 11.8012 13.7856 11.8012C13.0009 11.8012 12.4141 11.4328 12.3672 10.4156C12.3203 9.39936 12.9194 8.57529 13.705 8.57529ZM12.7713 12.7228C12.9184 12.7378 13.0122 12.8906 12.955 13.0275C12.4722 14.1815 11.3322 14.9925 10.0019 14.9925C8.67156 14.9925 7.5325 14.1815 7.04875 13.0275C6.99156 12.8906 7.08531 12.7378 7.2325 12.7228C8.095 12.6356 9.02781 12.5878 10.0019 12.5878C10.9759 12.5878 11.9078 12.6356 12.7713 12.7228Z"
                    fill="#5B5B5D"
                  />
                </svg>

                <svg
                  className="cursor-pointer"
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0725 0H11.0278V16.3478C11.0278 18.2957 9.47219 19.8957 7.53626 19.8957C5.60034 19.8957 4.04469 18.2957 4.04469 16.3478C4.04469 14.4348 5.56577 12.8695 7.43257 12.8V8.69567C3.31872 8.7652 0 12.1391 0 16.3478C0 20.5913 3.38786 24 7.57085 24C11.7538 24 15.1416 20.5565 15.1416 16.3478V7.9652C16.6627 9.07827 18.5295 9.73913 20.5 9.77393V5.66957C17.4579 5.56522 15.0725 3.06087 15.0725 0Z"
                    fill="#5B5B5D"
                  />
                </svg>
                <svg
                  className="mb-2 mt-2 cursor-pointer"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3263 0.903931H20.6998L13.3297 9.32742L22 20.7899H15.2112L9.89404 13.838L3.80995 20.7899H0.434432L8.31743 11.78L0 0.903931H6.96111L11.7674 7.25826L17.3263 0.903931ZM16.1423 18.7707H18.0116L5.94539 2.81706H3.93946L16.1423 18.7707Z"
                    fill="#5B5B5D"
                  />
                </svg>
              </div>

              <div className="flex h-[200px] w-[328px] flex-col space-y-12 md:w-[694px]">
                <Text className="font-inter m-0 h-10 w-[328px] text-left text-[14px] font-normal leading-[16.94px] text-[#5B5B5D] md:w-[678px] xl:w-[334px]">
                  Thank you for choosing Boilerplate.com Need help?{" "}
                  <span className="text-base font-semibold">
                    {" "}
                    <a
                      className="text-base font-semibold text-[#111111]"
                      href=""
                    >
                      Contact our customer support
                    </a>
                  </span>
                </Text>

                <svg
                  className="h-10 w-[334px] md:w-[678px]"
                  height="1"
                  viewBox="0 0 678 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="0.85"
                    x2="678"
                    y2="0.85"
                    stroke="#5B5B5D"
                    strokeWidth="0.3"
                    strokeDasharray="4 4"
                  />
                </svg>

                <Text className="font-inter m-0 mb-6 h-10 w-[328px] text-left text-[14px] font-normal leading-[20px] text-[#5B5B5D] md:w-[678px]">
                  You are receiving this email because you signed up at
                  Boilerplate.com. Want to change how you receive these emails?
                </Text>

                <Text className="font-inter m-0 mb-2 h-10 w-[328px] text-left text-[14px] font-normal leading-[24px] text-[#5B5B5D] md:w-[678px]">
                  You can{" "}
                  <span className="font-semibold text-[#111111] no-underline">
                    <a
                      className="font-semibold text-[#111111] no-underline"
                      href=""
                    >
                      update your preferences
                    </a>{" "}
                  </span>
                  or{" "}
                  <span className="font-semibold text-[#111111] no-underline">
                    <a
                      className="font-semibold text-[#111111] no-underline"
                      href=""
                    >
                      unsubscribe from this list.
                    </a>
                  </span>
                </Text>
              </div>
            </footer>
          </Section>
        </Body>
      </TailwindWrapper>
    </Html>
  );
};

export default EmailTemplate;
