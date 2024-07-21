"use client"

import { ChangeEvent, useState } from "react";
import { Button } from "../common/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const languageOptions = [
  "Italiano(Italian)",
  "Español (Spanish)",
  "Français (French)",
  "Deutsch (German)",
  "English",
  "日本語 (Japanese)",
  "한국어 (Korean)",
  "Русский (Russian)",
  "العربية (Arabic)",
];

const regionOptions = [
  "France",
  "Canada",
  "United Kingdom",
  "Germany",
  "United States",
  "Japan",
  "South Korea",
  "Russia",
  "United Arab Emirates"
];

const timeZoneOptions = [
  "(UTC-08:00) Pacific",
  "(UTC-07:00) Mountain",
  "(UTC-06:00) Central",
  "(UTC-05:00) Eastern",
  "(UTC-04:00) Atlantic",
  "(UTC+00:00) Co-ord",
  "(UTC+08:00) Beijing",
];

const Preferences: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedZone, setSelectedZone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
  };

  const handleZoneChange = (value: string) => {
    setSelectedZone(value);
  };

  const handleCancel = () => {
    setSelectedLanguage("");
    setSelectedRegion("");
    setSelectedZone("");
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!selectedLanguage || !languageOptions.includes(selectedLanguage)) {
      setMessage("There was a problem updating your Language. Please try again.");
      return;
    }
    if (!selectedRegion || !regionOptions.includes(selectedRegion)) {
      setMessage("There was a problem updating your Region. Please try again.");
      return;
    }
    if (!selectedZone || !timeZoneOptions.includes(selectedZone)) {
      setMessage("There was a problem updating your Time-Zone. Please try again.");
      return;
    }

    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: selectedLanguage,
          region: selectedRegion,
          timeZone: selectedZone,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Error updating settings. Please try again.');
    }
  };

  return (
    <div className="w-full ml-1 md:ml-10">
      <div className="mt-7 text-2xl font-bold">Language & Region</div>
      <div className="mt-1">Customize your language and region preferences</div>

      <div className="mt-10 text-gray-700">
        <Select onValueChange={handleLanguageChange} value={selectedLanguage}>
          <SelectTrigger 
            className="h-12 w-4/5 md:w-3/5 rounded-lg border border-gray-200 bg-white p-3"
            aria-label="Language"
          >
            <SelectValue placeholder={selectedZone || "Language"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {languageOptions.map((language) => (
                <SelectItem key={language} value={language} data-testid={language} >
                  {language}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 text-gray-700">
        <Select onValueChange={handleRegionChange} value={selectedRegion}>
          <SelectTrigger 
            className="h-12 w-4/5 md:w-3/5 rounded-lg border border-gray-200 bg-white p-3"
            aria-label="Region"
          >
           <SelectValue placeholder={selectedZone || "Region"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {regionOptions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 text-gray-700">
        <Select onValueChange={handleZoneChange} value={selectedZone}>
          <SelectTrigger 
            className="h-12 w-4/5 md:w-3/5 rounded-lg border border-gray-200 bg-white p-3"
            aria-label="Time-Zone"
          >
            <SelectValue placeholder={selectedZone || "Time-Zone"} />
            </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {timeZoneOptions.map((zone) => (
                <SelectItem key={zone} value={zone}>
                  {zone}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Button
          className="btn mt-5 rounded bg-orange-500 px-4 py-2 text-white"
          onClick={handleSubmit}
          aria-label="Save"
        >
          Save
        </Button>
        <Button
          className="btn mt-5 rounded border border-gray-200 px-4 py-2 text-gray-700 bg-white ml-5"
          onClick={handleCancel}
          aria-label="Cancel"
        >
          Cancel
        </Button>
      </div>

      {message && (
        <div
          className={`mt-4 ${
            message.includes("problem") || message.includes("Error")
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Preferences;
