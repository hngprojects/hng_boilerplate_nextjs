import axios from "axios";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import { IGetLatestBlogs, ISingleBlog } from "~/types/blog.types";
import { apiClient } from "./api-client";

export const getBlogs = async (blogId: string) => {
  try {
    const response = await apiClient.get(`/api/v1/blogs/${blogId}`);
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
};

type ISingleBlogProperties = {
  loading: boolean;
  success: boolean;
  data: undefined | IGetLatestBlogs;
  error: boolean;
  errorData: { error: undefined; status: number } | { error: string };
  fetchBlogs: () => Promise<void>;
  initialData: ISingleBlog[] | undefined;
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

export const useGetBlogs = create<ISingleBlogProperties>()(
  persist(
    (set) => ({
      ...initialState,
      fetchBlogs: async () => {
        set({ ...initialState, loading: true });
        try {
          const response = await apiClient.get(`/api/v1/blogs`);
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
      setInitialData: (blogs: ISingleBlog[]) => {
        set({ ...initialState, initialData: blogs });
      },
    }),
    {
      name: "blogs",
      storage,
    },
  ),
);
