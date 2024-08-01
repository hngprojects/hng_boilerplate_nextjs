"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useToast } from "~/components/ui/use-toast";
import {
  fetchLanguages,
  fetchRegions,
  fetchTimeZones,
  getApiConfig,
  Language,
  Region,
  Timezone,
} from "~/utils/getLangauge";

const LanguageRegion = () => {
  const { data: session } = useSession();
  const { user } = session ?? {};
  const { toast } = useToast();

  const [timezones, setTimezones] = useState<Timezone[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("");

  useEffect(() => {
    const getTimeZones = async () => {
      try {
        const [fetchedTimezones, fetchedLanguages, fetchedRegions] =
          await Promise.all([
            fetchTimeZones(toast),
            fetchLanguages(toast),
            fetchRegions(toast),
          ]);
        setTimezones(fetchedTimezones);
        setLanguages(fetchedLanguages);
        setRegions(fetchedRegions);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch timezones, languages, and regions.",
          variant: "destructive",
        });
      }
    };

    getTimeZones();
  }, []);

  const handleSave = async () => {
    if (!user?.id) {
      toast({
        title: "Error",
        description: "User not found.",
        variant: "destructive",
      });
      return;
    }

    const payload = {
      region_id: selectedRegion,
      timezone_id: selectedTimezone,
      language_id: selectedLanguage,
    };

    try {
      const { apiUrl, headers } = await getApiConfig();
      await axios.put(`${apiUrl}/api/v1/users/${user.id}/regions`, payload, {
        headers,
      });
      toast({
        title: "Settings saved successfully",
        description: "Your settings have been saved.",
      });
      toast({
        title: "Settings saved successfully",
        description: "Your settings have been saved.",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to save settings.",
        variant: "destructive",
      });
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
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.language_id} value={lang.language_id}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Region
            </label>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.region_id} value={region.region_id}>
                    {region.name}
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
              value={selectedTimezone}
              onValueChange={setSelectedTimezone}
            >
              <SelectTrigger className="w-full rounded-md border border-slate-300 bg-white text-sm font-medium text-slate-700 focus:border-orange-500 focus:ring-0">
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                {Array.isArray(timezones) &&
                  timezones.map((timezone) => (
                    <SelectItem
                      key={timezone.timezone_id}
                      value={timezone.timezone_id}
                    >
                      {`${timezone.identifier} (${timezone.offset})`}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 flex justify-start space-x-4">
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </>
  );
};

export default LanguageRegion;
