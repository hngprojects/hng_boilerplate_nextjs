"use client";

import Image from "next/image";
import React, { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";

const LanguageOptions = [
  "Italiano (Italian)",
  "Español (Spanish)",
  "Français (French)",
  "Deutsch (German)",
  "English",
  "日本語 (Japanese)",
  "한국어 (Korean)",
  "Русский (Russian)",
  "العربية (Arabic)",
];

const RegionOptions = [
  "France",
  "Canada",
  "United Kingdom",
  "Germany",
  "United States",
  "Japan",
  "South Korea",
  "Russian",
  "United Arab Emirates",
];

const ZoneOptions = [
  "(UTC -08:00) Pacific",
  "(UTC -07:00) Mountain",
  "(UTC -06:00) Central",
  "(UTC -05:00) Eastern",
  "(UTC +00:00) Co-ord",
  "(UTC +08:00) Beijing",
];

const LanguagePage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Language");
  const [selectedRegion, setSelectedRegion] = useState<string>("Region");
  const [selectedZone, setSelectedZone] = useState<string>("Time-Zone");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setOpenDropdown(null);
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setOpenDropdown(null);
  };

  const handleZoneSelect = (zone: string) => {
    setSelectedZone(zone);
    setOpenDropdown(null);
  };

  const handleSave = () => {
    const unselectedOptions: string[] = [];

    if (selectedLanguage === "Language") unselectedOptions.push("language");
    if (selectedRegion === "Region") unselectedOptions.push("region");
    if (selectedZone === "Time-Zone") unselectedOptions.push("time-zone");

    if (unselectedOptions.length > 0) {
      setError(
        `There was a problem updating your ${unselectedOptions.join(", ")}.`,
      );
    } else if (unselectedOptions.length <= 0) {
      setMessage("Settings have been saved successfully.");
    }
  };

  return (
    <div className="relative">
      <div className="flex w-[826px] flex-col gap-8 px-[36px] py-[30px]">
        <div className="flex flex-col gap-2 text-neutral-dark-2">
          <h3 className="text-semibold text-2xl">Language & Region</h3>
          <p className="text-base font-normal">
            Customize your language and region preferences
          </p>
        </div>

        <div className="relative flex w-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="relative flex flex-col gap-4">
              <div
                className="flex w-full cursor-pointer items-center justify-between rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "language" ? null : "language",
                  )
                }
              >
                <span>{selectedLanguage}</span>
                <Image
                  src="/settings/arrow-down.svg"
                  width={12}
                  height={12}
                  alt="arrow-down"
                />
              </div>
              {openDropdown === "language" && (
                <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-border bg-white">
                  {LanguageOptions.map((option) => (
                    <div
                      key={option}
                      className={`flex cursor-pointer items-center gap-2 py-2 ${
                        hoveredItem === option
                          ? "flex bg-gray-100 px-2 py-2"
                          : "flex px-8 hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => setHoveredItem(option)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleLanguageSelect(option)}
                    >
                      {hoveredItem === option && (
                        <Image
                          src="/settings/check.svg"
                          width={16}
                          height={16}
                          alt="check"
                          className=""
                        />
                      )}
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex flex-col gap-4">
              <div
                className="flex w-full cursor-pointer items-center justify-between rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onClick={() =>
                  setOpenDropdown(openDropdown === "region" ? null : "region")
                }
              >
                <span>{selectedRegion}</span>
                <Image
                  src="/settings/arrow-down.svg"
                  width={12}
                  height={12}
                  alt="arrow-down"
                />
              </div>
              {openDropdown === "region" && (
                <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-border bg-white">
                  {RegionOptions.map((option) => (
                    <div
                      key={option}
                      className={`flex cursor-pointer items-center gap-2 py-2 ${
                        hoveredItem === option
                          ? "flex bg-gray-100 px-2 py-2"
                          : "flex px-8 hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => setHoveredItem(option)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleRegionSelect(option)}
                    >
                      {hoveredItem === option && (
                        <Image
                          src="/settings/check.svg"
                          width={16}
                          height={16}
                          alt="check"
                        />
                      )}
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative flex flex-col gap-4">
              <div
                className="flex w-full cursor-pointer items-center justify-between rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
                onClick={() =>
                  setOpenDropdown(openDropdown === "zone" ? null : "zone")
                }
              >
                <span>{selectedZone}</span>
                <Image
                  src="/settings/arrow-down.svg"
                  width={12}
                  height={12}
                  alt="arrow-down"
                />
              </div>
              {openDropdown === "zone" && (
                <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-border bg-white">
                  {ZoneOptions.map((option) => (
                    <div
                      key={option}
                      className={`flex cursor-pointer items-center gap-2 py-2 ${
                        hoveredItem === option
                          ? "flex bg-gray-100 px-2 py-2"
                          : "flex px-8 hover:bg-gray-50"
                      }`}
                      onMouseEnter={() => setHoveredItem(option)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleZoneSelect(option)}
                    >
                      {hoveredItem === option && (
                        <Image
                          src="/settings/check.svg"
                          width={16}
                          height={16}
                          alt="check"
                        />
                      )}
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {message && (
              <span className="mt-4 text-sm text-gray-600">{message}</span>
            )}
            {error && (
              <span className="mt-4 text-sm text-gray-600">{error}</span>
            )}
          </div>
          <div className="flex gap-3">
            <CustomButton variant="primary" onClick={handleSave}>
              Save
            </CustomButton>
            <CustomButton variant="outline">Cancel</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage;
