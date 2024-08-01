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
import { toast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";
import { regions, timezones } from "./data/regions";

const Page = () => {
  const [preferences, setPreferences] = useState({
    language: "",
    region: "",
    timezone: "",
  });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [apiUrl, setApiUrl] = useState("");
  const { data: session } = useSession();

  const access_token = session?.access_token;

  const handlePreferences = (index: string, value: string) => {
    setStatus({ type: "editted", msg: "" });
    setPreferences({ ...preferences, [index]: value });
  };

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        const url = await getApiUrl();
        setApiUrl(url);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch API URL",
          variant: "destructive",
        });
      }
    };

    fetchApiUrl();
  }, []);

  useEffect(() => {
    axios
      .get(apiUrl + "/v1/regions", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => setPreferences(response.data))
      .catch(() => {
        toast({
          title: "Error",
          description: "error",
          variant: "destructive",
        });
      });
  }, [apiUrl]);

  const handleSave = () => {
    axios
      .post(apiUrl + "/v1/regions", preferences, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
      })
      .then((response) => setPreferences(response.data))
      .catch((error) => {
        toast({
          title: "Error",
          description: "Could not save language and region",
          variant: "destructive",
        });
      });
  };

  const handleCancel = () => {
    if (status.type === "editted") {
      setStatus({
        type: "editted",
        msg: "You have unsaved changes. Are you sure you want to leave without saving?",
      });
      setPreferences(preferences);
    }
  };

  const languages: string[] = [
    "Italiano (Italian)",
    "Espanol (Spanish)",
    "Francias (French)",
    "Deutsch (German)",
    "English",
    "Japanese",
    "Korean",
    "Russian",
    "Arabic",
  ];

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-2 pb-12">
        <h1 className="text-3xl font-semibold">Language & Region</h1>
        <p>Customize your language and region preferences</p>
      </div>

      <div className="flex flex-col gap-4">
        <Select onValueChange={(value) => handlePreferences("language", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((item: string) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handlePreferences("region", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Region" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((item: { name: string; code: string }) => (
              <SelectItem key={item.code} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => handlePreferences("timezone", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Time-Zone" />
          </SelectTrigger>
          <SelectContent>
            {timezones.map((item: string) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p
        className={`${status.type === "error" ? "text-destructive" : status.type === "success" ? "text-success" : "text-primary"} mt-4 text-sm`}
      >
        {status.msg}
      </p>

      <div className="mt-8 flex gap-4">
        <Button variant={"default"} onClick={handleSave}>
          Save
        </Button>
        <Button variant={"outline"} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Page;
