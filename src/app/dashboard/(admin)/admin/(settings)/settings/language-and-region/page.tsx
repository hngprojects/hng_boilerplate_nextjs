"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { getAccessToken } from "~/utils/getAccessToken";
import { getApiUrl } from "~/utils/getApiUrl";

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
];

const regions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
];

const timeZones = [
  { value: "utc+0", label: "(UTC+00:00) Coordinated Universal Time" },
  { value: "utc+8", label: "(UTC+08:00) Beijing, Hong Kong, Singapore" },
  { value: "utc-5", label: "(UTC-05:00) Eastern Time (US & Canada)" },
  { value: "utc-8", label: "(UTC-08:00) Pacific Time (US & Canada)" },
];

const LanguageRegion = () => {
  const [timeZoness, setTimeZones] = useState([]);

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        // First, get the API URL
        const apiUrl = await getApiUrl();
        const accessToken = await getAccessToken();

        console.log("API URL:", accessToken); // Log the actual URL for debugging

        // Then use it to fetch the timezones
        const response = await axios.get(`${apiUrl}/api/v1/timezones`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setTimeZones(response.data);
      } catch (error) {
        console.error("Error fetching timezones:", error);
      }
    };

    fetchTimeZones();
  }, []);
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
            <Select>
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
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
            <Select>
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
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
            <Select>
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                {timeZones.map((tz) => (
                  <SelectItem key={tz.value} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex justify-start space-x-4">
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
            Save
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </>
  );
};

export default LanguageRegion;
