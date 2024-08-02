import axios from "axios";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import { ISingleBlog, ISingleBlogResponse } from "~/types/blog.types";
import { getApiUrl } from "~/utils/getApiUrl";
import { apiClient } from "./api-client";

export const getSingleBlog = async (blogId: string) => {
  const url = await getApiUrl();
  try {
    const response = await apiClient.get(`${url}/api/v1/blogs/${blogId}`);
    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: undefined,
  errorData: {
    error: "",
  },
  initialData: undefined,
  blogs: undefined,
};

export type ISingleBlogProperties = {
  loading: boolean;
  success: boolean;
  data: undefined | ISingleBlogResponse;
  error: boolean;
  errorData: { error: undefined; status: number } | { error: string };
  fetchBlog: (blogId: string) => Promise<void>;
  initialData: ISingleBlog | undefined;
  blogs: ISingleBlog[] | undefined;
};

const storage: PersistStorage<ISingleBlogProperties> = {
  getItem: (name) => {
    const string_ = localStorage.getItem(name);
    if (!string_) return;
    return JSON.parse(string_);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useGetSingleBlog = create<ISingleBlogProperties>()(
  persist(
    (set) => ({
      ...initialState,
      fetchBlog: async (blogId: string) => {
        set({ ...initialState, loading: true });
        const url = await getApiUrl();
        try {
          const response = await apiClient.get(`${url}/api/v1/blogs/${blogId}`);
          set({
            ...initialState,
            success: true,
            data: response.data,
            loading: false,
          });
        } catch (error) {
          set({
            ...initialState,
            success: false,
            error: true,
            loading: false,
            errorData:
              axios.isAxiosError(error) && error.response
                ? {
                    error:
                      error.response.data.message || "Registration failed.",
                    status: error.response.status,
                  }
                : {
                    error: "An unexpected error occurred.",
                  },
          });
        }
      },
      setInitialData: (blog: ISingleBlog) => {
        set({ ...initialState, initialData: blog });
      },
    }),
    {
      name: "singleproduct",
      storage,
    },
  ),
);
