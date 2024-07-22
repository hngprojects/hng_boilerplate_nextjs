/* eslint-disable unicorn/prevent-abbreviations */
"use client";

import React, { useState } from "react";

const languageRegion = [
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

const regions = ["Americas", "Europe", "Asia", "Africa", "Oceania"];

const timeZones = [
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC+00:00",
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
  "UTC+04:00",
];

const LanguageRegion: React.FC = () => {
  const [language, setLanguage] = useState("");
  const [region, setRegion] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [errors, setErrors] = useState({
    language: "",
    region: "",
    timeZone: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    let isValid = true;
    const newErrors = { language: "", region: "", timeZone: "" };

    if (!language) {
      newErrors.language = "Please select a language";
      isValid = false;
    }

    if (!region) {
      newErrors.region = "Please select a region";
      isValid = false;
    }

    if (!timeZone) {
      newErrors.timeZone =
        "There was a problem updating your timezone. Please try again.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validate()) {
      console.log({ language, region, timeZone });
      setSuccessMessage("Settings have been saved successfully");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-gray-300 p-6">
      <h1 className="mb-4 text-2xl font-bold">Language & Region</h1>
      <p className="mb-6">Customize your language and region preferences</p>
      <div className="mb-4">
        <label className="mb-2 block">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={`w-full border p-2 ${
            errors.language ? "border-red-500" : "border-gray-300"
          } rounded`}
        >
          <option value="">Select Language</option>
          {languageRegion.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        {errors.language && (
          <p className="text-sm text-red-500">{errors.language}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Region</label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={`w-full border p-2 ${
            errors.region ? "border-red-500" : "border-gray-300"
          } rounded`}
        >
          <option value="">Select Region</option>
          {regions.map((reg) => (
            <option key={reg} value={reg}>
              {reg}
            </option>
          ))}
        </select>
        {errors.region && (
          <p className="text-sm text-red-500">{errors.region}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="mb-2 block">Time-Zone</label>
        <select
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
          className={`w-full border p-2 ${
            errors.timeZone ? "border-red-500" : "border-gray-300"
          } rounded`}
        >
          <option value="">Select Time-Zone</option>
          {timeZones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
        {errors.timeZone && (
          <p className="text-sm text-red-500">{errors.timeZone}</p>
        )}
      </div>
      {successMessage && (
        <div className="mb-4 text-sm text-green-500">{successMessage}</div>
      )}
      <div className="flex space-x-4">
        <button
          onClick={handleSave}
          className="rounded bg-orange-500 px-4 py-2 text-white"
        >
          Save
        </button>
        <button className="rounded bg-gray-500 px-4 py-2 text-white">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LanguageRegion;
