"use client";

import Image from "next/image";
import React, { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";

const WaitlistPayment: React.FC = () => {
  const [activeButton, setActiveButton] = useState("Payments");

  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "Payments": {
        return (
          <>
            <Image
              src="/images/WaitList/payment.png"
              alt="Phone for Payment"
              width="292"
              height="344"
            />
            <h1 className="text-[24px] font-bold leading-[30px] md:text-[30px] md:font-semibold">
              Easy Payment
            </h1>
            <p className="mt-2 text-lg">
              Handle projects together with team virtually
            </p>
          </>
        );
      }
      case "Safety": {
        return (
          <>
            <Image
              src="/images/WaitList/safety.png"
              alt="Safety"
              width="292"
              height="344"
            />
            <h1 className="text-[24px] font-bold leading-[30px] md:text-[30px] md:font-semibold">
              Safe Payment
            </h1>
            <p className="mt-2 text-lg">
              Our system ensures the highest level of safety.
            </p>
          </>
        );
      }
      case "Database": {
        return (
          <>
            <Image
              src="/images/WaitList/database.png"
              alt="Database"
              width="292"
              height="344"
            />
            <h1 className="text-[24px] font-bold leading-[30px] md:text-[30px] md:font-semibold">
              Flexible Database
            </h1>
            <p className="mt-2 text-lg">
              Manage your data efficiently and securely.
            </p>
          </>
        );
      }
      case "Email management": {
        return (
          <>
            <Image
              src="/images/WaitList/emailManagement.jpg"
              alt="Email Management"
              width="300"
              height="354"
            />
            <h1 className="text-[24px] font-bold leading-[30px] md:text-[30px] md:font-semibold">
              Email Management
            </h1>
            <p className="mt-2 text-lg">
              Email management is streamlined and simple.
            </p>
          </>
        );
      }
      default: {
        return;
      }
    }
  };

  return (
    <div className="mt-[60px] flex flex-col items-center justify-center px-3 text-neutral-dark-2 md:mt-[100px] md:flex-col">
      <div className="text-center">
        <p className="text-[18px] md:text-[24px]">We have got you covered</p>
        <h1 className="h-[87px] w-[332px] text-[24px] font-bold leading-[29.05px] md:h-[132px] md:w-[669px] md:text-[36px] md:leading-[43.57px]">
          Transform your Deployment the easy and seamless way with our
          boilerplates.
        </h1>
      </div>

      <div className="mt-[50px] flex w-full flex-col items-center justify-center md:mt-[58px] md:w-[774px] md:flex-row md:items-center md:justify-between">
        <div
          className="hide-scrollbar flex w-full gap-[15px] overflow-x-auto md:mr-auto md:w-auto md:flex-col md:gap-[27px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <CustomButton
            variant="outline"
            className="h-[60px] w-auto justify-start gap-[16px] bg-transparent p-[24px] focus:border-primary md:h-[72px] md:min-w-[320px]"
            onClick={() => handleClick("Payments")}
          >
            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
                activeButton === "Payments" ? "bg-primary" : "bg-neutral-dark-1"
              }`}
            >
              <Image
                src="/images/WaitList/dollar.svg"
                alt="Dollar"
                width="24"
                height="24"
              />
            </div>
            <p className="text-[20px] font-semibold leading-normal text-neutral-dark-1">
              Payments
            </p>
          </CustomButton>

          <CustomButton
            variant="outline"
            className="h-[60px] w-auto justify-start gap-[16px] bg-transparent p-[24px] focus:border-primary md:h-[72px] md:min-w-[320px]"
            onClick={() => handleClick("Safety")}
          >
            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
                activeButton === "Safety" ? "bg-primary" : "bg-neutral-dark-1"
              }`}
            >
              <Image
                src="/images/WaitList/lock.svg"
                alt="Safety"
                width="24"
                height="24"
              />
            </div>
            <p className="text-[20px] font-semibold leading-normal text-neutral-dark-1">
              Safety
            </p>
          </CustomButton>

          <CustomButton
            variant="outline"
            className="h-[60px] w-auto justify-start gap-[16px] bg-transparent p-[24px] focus:border-primary md:h-[72px] md:min-w-[320px]"
            onClick={() => handleClick("Database")}
          >
            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
                activeButton === "Database" ? "bg-primary" : "bg-neutral-dark-1"
              }`}
            >
              <Image
                src="/images/WaitList/database.svg"
                alt="Database"
                width="24"
                height="24"
              />
            </div>
            <p className="text-[20px] font-semibold leading-normal text-neutral-dark-1">
              Database
            </p>
          </CustomButton>

          <CustomButton
            variant="outline"
            className="h-[60px] w-auto justify-start gap-[16px] bg-transparent p-[24px] focus:border-primary md:h-[72px] md:min-w-[320px]"
            onClick={() => handleClick("Email management")}
          >
            <div
              className={`flex h-[40px] w-[40px] items-center justify-center rounded-full ${
                activeButton === "Email management"
                  ? "bg-primary"
                  : "bg-neutral-dark-1"
              }`}
            >
              <Image
                src="/images/WaitList/message.svg"
                alt="Email Management"
                width="24"
                height="24"
              />
            </div>
            <p className="text-[20px] font-semibold leading-normal text-neutral-dark-1">
              Email management
            </p>
          </CustomButton>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center md:m-auto md:mt-0 md:w-[291.2px]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default WaitlistPayment;
