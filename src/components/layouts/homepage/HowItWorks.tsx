import { useTranslations } from "next-intl";

import { Easy, Prebuilt, Scalable } from "./svgs";

const HowItWorks = () => {
  const t = useTranslations("howItWorks");
  return (
    <div className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-inter text-3xl font-bold leading-snug md:text-4xl md:leading-tight">
              <span className="text-primary">{t("howItWorksTitlePrefix")}</span>{" "}
              {t("howItWorksTitleHighlight")}
            </h1>
            <p className="font-inter mb-12 mt-6 text-lg font-normal">
              {t("howItWorksDescription")}
            </p>
          </div>

          {/* First Video and Pre-Built Section */}
          <div className="flex flex-col space-y-10">
            <video
              src={
                "https://res.cloudinary.com/oyerotech-herokuapp-com/video/upload/v1724570490/Boilerplate_Template_Video_1_iixcin.mp4"
              }
              controls
              className="h-auto w-full rounded-lg shadow-lg"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Second Video and Scalable/Easy Sections */}
          <div className="order-2 flex flex-col space-y-10 lg:order-1">
            <video
              src={
                "https://res.cloudinary.com/oyerotech-herokuapp-com/video/upload/v1724570524/How-does-it-work_Video_for_HNG_Boilerplate_mh6p6b.mp4"
              }
              controls
              className="h-auto w-full rounded-lg shadow-lg"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />
          </div>

          <div className="order-1 flex flex-col gap-8 lg:order-2">
            <div className="flex items-center space-x-5">
              <Prebuilt />
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
            <div className="flex items-center space-x-5">
              <Scalable />
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
            <div className="flex items-center space-x-5">
              <Easy />
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
