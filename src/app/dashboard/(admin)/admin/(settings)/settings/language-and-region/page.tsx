"use client";

import axios from "axios";
import { countries, languages } from "countries-list";
import moment from "moment-timezone";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const _languages = Object.values(languages).map((data) => ({
  value: data.name,
  label: data.name,
}));

const regions = Object.values(countries).map((data) => ({
  value: data.name,
  label: data.name,
}));

const formatTimeZone = () => {
  return moment.tz.names().map((tz) => {
    const offset = moment.tz(tz).utcOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset >= 0 ? "+" : "-";
    const formattedOffset = `UTC${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    // Create a simplified value for the timezone (e.g., "utc+0" or "utc-8")
    const value = `utc${sign}${hours}`;

    return {
      value: value,
      label: `(${formattedOffset}) ${tz.replace("_", " ")}`,
    };
  });
};

const timeZones = formatTimeZone();

const LanguageRegion = () => {
  const { data } = useSession();

  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");
  const [timezone, setTimezone] = useState("");

  const [errorMessage, setErrorMessage] = useState<undefined | string>();
  const [successMessage, setSuccessMessage] = useState<undefined | string>();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    (async () => {
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/profile/${data?.user.id}`;

      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${data?.access_token}`,
          },
        });
        setLanguage(response.data.data.language);
        setRegion(response.data.data.region);
        setTimezone(response.data.data.timezones);
      } catch {
        setErrorMessage("An error occurred while retrieving your information");
      }
    })();
  }, [data]);

  const updateUserData = async () => {
    try {
      setIsPending(true);
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/profile/${data?.user.id}`;

      const payload = {
        language,
        region,
        timezones: timezone,
      };

      await axios.patch(API_URL, payload, {
        headers: {
          Authorization: `Bearer ${data?.access_token}`,
        },
      });

      setSuccessMessage("Settings have been saved successfully.");
    } catch {
      setErrorMessage(
        "There was a problem updating your settings. Please try again.",
      );
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <div className="font-inter max-w-md">
        <h2 className="mb-4 text-2xl font-bold text-slate-700">
          Language & Region
        </h2>
        <p className="mb-6 text-base font-normal text-gray-600">
          Customize your language and region preferences
        </p>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Language
            </label>
            <Select
              value={language}
              onValueChange={(value) => setLanguage(value)}
            >
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {_languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Region
            </label>
            <Select value={region} onValueChange={(value) => setRegion(value)}>
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region, index) => (
                  <SelectItem key={index} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Time-Zone
            </label>
            <Select
              value={timezone}
              onValueChange={(value) => setTimezone(value)}
            >
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-left text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                {timeZones.map((tz, index) => (
                  <SelectItem key={index} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="pt-4 text-[14px] lg:text-[16px]">
          {errorMessage && <p className="text-[#E00414]">{errorMessage}</p>}
        </div>
        <div>
          {successMessage && <p className="text-[#10AF20]">{successMessage}</p>}
        </div>
        <div className="mt-6 flex justify-start space-x-4">
          <CustomButton
            isLoading={isPending}
            onClick={updateUserData}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600"
          >
            Save
          </CustomButton>
          <CustomButton variant="outline">Cancel</CustomButton>
        </div>
      </div>
    </>
  );
};

export default LanguageRegion;
