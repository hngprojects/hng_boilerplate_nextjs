import axios from "axios";

import { getAccessToken } from "~/utils/getAccessToken";
import { getApiUrl } from "~/utils/getApiUrl";

export interface Timezone {
  created_at: string;
  identifier: string;
  offset: string;
  timezone_id: string;
  updated_at: string;
}
export interface Language {
  language_id: string;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export interface Region {
  region_id: string;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
}
interface TimezoneApiResponse {
  data: Timezone[];
}

interface LanguageApiResponse {
  data: Language[];
}

interface RegionApiResponse {
  data: Region[];
}

type Toast = {
  title: string;
  description: string;
  variant?: "default" | "destructive" | null;
};

type ToastFunction = (properties: Toast) => void;

const handleApiError = (
  error: unknown,
  context: string,
  toast: ToastFunction,
) => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  toast({
    title: `Error ${context}`,
    description: errorMessage,
    variant: "destructive",
  });
  throw new Error(`${context}: ${errorMessage}`);
};

export const getApiConfig = async () => {
  const apiUrl = await getApiUrl();
  const accessToken = await getAccessToken();

  return {
    apiUrl,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
};
export const fetchTimeZones = async (
  toast: ToastFunction,
): Promise<Timezone[]> => {
  try {
    const { apiUrl, headers } = await getApiConfig();

    const response = await axios.get<TimezoneApiResponse>(
      `${apiUrl}/api/v1/timezones`,
      { headers },
    );

    return response.data.data;
  } catch (error) {
    return handleApiError(error, "fetching timezones", toast);
  }
};

export const fetchLanguages = async (
  toast: ToastFunction,
): Promise<Language[]> => {
  try {
    const { apiUrl, headers } = await getApiConfig();

    const response = await axios.get<LanguageApiResponse>(
      `${apiUrl}/api/v1/languages`,
      { headers },
    );

    return response.data.data;
  } catch (error) {
    return handleApiError(error, "fetching languages", toast);
  }
};

export const fetchRegions = async (toast: ToastFunction): Promise<Region[]> => {
  try {
    const { apiUrl, headers } = await getApiConfig();

    const response = await axios.get<RegionApiResponse>(
      `${apiUrl}/api/v1/regions`,
      { headers },
    );

    return response.data.data;
  } catch (error) {
    return handleApiError(error, "fetching regions", toast);
  }
};
