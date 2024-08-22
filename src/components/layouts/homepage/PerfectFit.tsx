"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

//

const PerfectFit = () => {
  const t = useTranslations("perfectFit");
  //

  return (
    <div className="perfect-fit bg-[#FBF3F3] py-24 text-center">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
        <p className="mb-8 text-lg font-normal text-[#525252] md:px-28 lg:px-48 xl:px-48">
          {t("description")}
        </p>
        <Link
          href="/pricing"
          className="rounded-md border-none bg-primary px-7 py-3 text-background hover:bg-destructive"
          data-testid="pricing"
        >
          {t("cta")}
        </Link>
      </div>
    </div>
  );
};

export default PerfectFit;
