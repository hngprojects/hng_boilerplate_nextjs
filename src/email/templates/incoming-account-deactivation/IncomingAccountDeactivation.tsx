import {
  Button,
  Head,
  Heading,
  Html,
  Img,
  Preview,
} from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface IncomingAccountDeactivationProperties {
  title?: string;
  titleDeactivationDays?: string;
  name?: string;
  image?: string;
  accessLinkHref?: string;
  email?: string;
  lastActive?: string;
  deactivationDate?: string;
}
``;

export const IncomingAccountDeactivation = ({
  title,
  titleDeactivationDays,
  name,
  image,
  accessLinkHref,
  email,
  lastActive,
  deactivationDate,
}: IncomingAccountDeactivationProperties) => {
  return (
    <Html>
      <Tailwindwrapper>
        <Head />
        <Preview>{`${title} ${titleDeactivationDays}`}</Preview>
        <div className="box-border flex w-full flex-col items-center justify-center bg-white p-14 sm:py-12">
          <Img
            src={image}
            alt="Deactivation logo"
            className="sm:h-[100px] sm:w-[100px] md:h-[132px] md:w-[132px] lg:h-[132px] lg:w-[132px] 2xl:h-[132px] 2xl:w-[132px]"
          />
          <Heading
            as="h4"
            className="my-0 py-14 text-center text-2xl font-semibold text-[#0A0A0A] sm:py-10 sm:text-xl"
          >
            {title}{" "}
            <span className="text-[#DC2626]">{titleDeactivationDays}</span>
          </Heading>
          <main className="w-full">
            <h2 className="my-0 pb-8 text-lg font-semibold text-[#111111] dark:text-gray-200 sm:pb-7 sm:text-base">
              Hi {name},
            </h2>

            <p className="my-0 pb-7 text-base font-normal text-[#111111] sm:pb-6 sm:text-sm">
              We hope this email finds you well. We noticed that you haven&#39;t
              logged into your Boilerplate account for quite some time. As part
              of our ongoing efforts to maintain a secure and efficient service,
              we will be deactivating inactive accounts.
            </p>

            <span className="font-semibold"> Your deactivation deatails:</span>
            <ul className="my-0 pb-7 sm:pb-6">
              <li className="pb-5 pt-5 text-[#FDC7A2] sm:pb-4">
                <span className="text-base font-semibold text-[#0A0A0A] sm:text-sm">
                  Account Email:{" "}
                </span>
                <span className="text-base font-normal text-[#0A0A0A] sm:text-sm">
                  {email}
                </span>
              </li>
              <li className="pb-5 text-[#FDC7A2] sm:pb-4">
                <span className="text-base font-semibold text-[#0A0A0A] sm:text-sm">
                  Last Active:{" "}
                </span>
                <span className="text-base font-normal text-[#0A0A0A] sm:text-sm">
                  {lastActive}
                </span>
              </li>
              <li className="text-[#FDC7A2]">
                <span className="text-base font-semibold text-[#0A0A0A] sm:text-sm">
                  Deactivation Date:{" "}
                </span>
                <span className="text-base font-normal text-[#0A0A0A] sm:text-sm">
                  {deactivationDate}
                </span>
              </li>
            </ul>

            <span className="pb-7 text-base text-[#111111] sm:text-sm">
              To keep your account active, simply log in before the deactivation
              date. However, if you no longer wish to use your account, no
              further action is needed on your part.
            </span>

            <Button
              href={accessLinkHref}
              className="mx-auto mb-14 mt-7 block whitespace-nowrap rounded-[8px] bg-[#F97316] px-10 py-2 text-center text-[#FAF8F8] sm:mb-10 sm:mt-6 md:w-[29.3%] lg:w-[29.3%] 2xl:w-[29.3%]"
            >
              Access My Account
            </Button>
          </main>
          <div className="flex w-full flex-col justify-start gap-2">
            <span className="text-sm font-medium text-[#111111]">Regards,</span>
            <span className="text-sm font-medium text-[#111111]">
              Boilerplate
            </span>
          </div>
        </div>
      </Tailwindwrapper>
    </Html>
  );
};

IncomingAccountDeactivation.PreviewProps = {
  title: "Account Deactivation In",
  titleDeactivationDays: "Two Days!",
  name: "John Doe",
  image: "https://i.ibb.co/LPgCcpG/deactivation-logo.png",
  accessLinkHref: "",
  email: "johndoe@gmail.com",
  lastActive: "17th June, 2024 / 11:56pm",
  deactivationDate: "20th July, 2024 / 11:56pm",
} as IncomingAccountDeactivationProperties;

export default IncomingAccountDeactivation;
