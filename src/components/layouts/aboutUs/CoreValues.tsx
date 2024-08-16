import { useTranslations } from "next-intl";

const CoreValues = () => {
  const t = useTranslations("coreValues");
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex w-[300px] flex-col items-center sm:w-[400px] md:w-[500px]">
            <h3 className="mb-2 text-center text-[28px] font-[700] text-neutral-600 sm:text-[32px] md:text-[35px] lg:text-[40px]">
              {t("title")}
            </h3>
            <p className="text-center text-[14px] text-neutral-600 md:text-[16px] lg:text-[18px]">
              {t("description")}
            </p>
          </div>

          <div className="mt-[20px] grid w-full grid-cols-1 gap-[20px] sm:w-[500px] md:w-[750px] md:grid-cols-2 lg:w-[1000px] xl:w-[1200px]">
            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3
                className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]"
                data-testid="integrity"
              >
                {t("values.integrity.title")}
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                {t("values.integrity.description")}
              </p>
            </div>

            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3 className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]">
                {t("values.customerCentricity.title")}
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                {t("values.customerCentricity.description")}
              </p>
            </div>

            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3
                className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]"
                data-testid="innovation"
              >
                {t("values.innovation.title")}
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                {t("values.innovation.description")}
              </p>
            </div>

            <div className="rounded-[10px] bg-[#f974161a] p-6 sm:p-8">
              <h3 className="mb-3 text-[18px] font-[700] text-primary sm:text-[20px]">
                {t("values.excellence.title")}
              </h3>
              <p className="text-[14px] font-[400] text-neutral-600 md:text-[16px] lg:text-[18px]">
                {t("values.excellence.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
