"use client";

import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";

import { Easy, Prebuilt, Scalable } from "./svgs";

const HowItWorks: React.FC = () => {
  const t = useTranslations("howItWorks");
  const [showVideo, setShowVideo] = useState(true);
  const timeoutReference = useRef<NodeJS.Timeout | null>(null);

  const handleCloseVideo = () => {
    setShowVideo(false);
    timeoutReference.current = setTimeout(() => setShowVideo(true), 30000);
  };

  useEffect(() => {
    return () => {
      if (timeoutReference.current) {
        clearTimeout(timeoutReference.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#ffffff] py-20">
      {showVideo && (
        <div className="fixed right-0 top-3/4 z-50 -translate-y-1/2 transform bg-white p-4 shadow-lg transition-all duration-300 ease-in-out">
          <button
            onClick={handleCloseVideo}
            className="absolute right-2 top-2 z-30 h-5 w-5 items-center justify-center rounded-full bg-black text-[12px] text-white hover:text-gray-200"
          >
            X
          </button>
          <video className="h-auto w-72" loop autoPlay muted playsInline>
            <source
              src="/freecompress-Boilerplate Ad Video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        {/* Rest of your existing code */}
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full md:pr-10 lg:w-3/5 lg:pr-20">
            <h1 className="font-inter text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
              <span className="text-primary">{t("howItWorksTitlePrefix")}</span>{" "}
              {t("howItWorksTitleHighlight")}
            </h1>
            <p className="font-inter mb-12 mt-6 text-lg font-normal">
              {t("howItWorksDescription")}
            </p>
          </div>

          <div className="flex w-full flex-col items-end md:items-start lg:w-2/5">
            <div className="mb-9 flex space-x-5">
              <div>
                <Prebuilt />
              </div>
              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="prebuilt"
                >
                  {t("prebuiltTitle")}
                </h3>
                <small
                  className="font-inter text-base font-normal"
                  data-testid="section"
                >
                  {t("prebuiltDescription")}
                </small>
              </div>
            </div>

            <div className="mb-9 flex space-x-5">
              <div>
                <Scalable />
              </div>
              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="scalable"
                >
                  {t("scalableTitle")}
                </h3>
                <small
                  className="font-inter text-base font-normal"
                  data-testid="boilerplate"
                >
                  {t("scalableDescription")}
                </small>
              </div>
            </div>

            <div className="mb-9 flex space-x-5">
              <div>
                <Easy />
              </div>
              <div>
                <h3
                  className="font-inter mb-2 text-lg font-bold md:text-xl"
                  data-testid="easy"
                >
                  {t("easyTitle")}
                </h3>
                <small
                  className="font-inter text-base font-normal"
                  data-testid="tailor"
                >
                  {t("easyDescription")}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
