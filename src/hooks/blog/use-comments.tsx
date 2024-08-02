import axios from "axios";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import { IComment, ICreateCommentResponse } from "~/types/comment.types";
import { getApiUrl } from "~/utils/getApiUrl";
import { apiClient } from "./api-client";

const initialState = {
  loading: false,
  success: false,
  error: false,
  comments: undefined,
  errorData: {
    error: "",
  },
  response: undefined,
};

type ICommentsProperties = {
  loading: boolean;
  success: boolean;
  comments: undefined | IComment[];
  error: boolean;
  response: ICreateCommentResponse | undefined;
  errorData: { error: undefined; status: number } | { error: string };
  createComment: (blogId: string, comment: IComment) => Promise<void>;
  getComments: (blogId: string) => Promise<void>;
};

const storage: PersistStorage<ICommentsProperties> = {
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

export const useComment = create<ICommentsProperties>()(
  persist(
    (set) => ({
      ...initialState,
      createComment: async (blogId: string, comment: IComment) => {
        set({ ...initialState, loading: true });
        const url = await getApiUrl();
        try {
          const response = await apiClient.post(
            `${url}/api/v1/blogs/${blogId}/comments`,
          );
          set((state) => ({
            ...initialState,
            success: true,
            comments: [...state.comments!, comment],
            response: response.data,
          }));
        } catch (error) {
          set({
            ...initialState,
            success: false,
            error: true,
            errorData:
              axios.isAxiosError(error) && error.response
                ? {
                    error:
                      error.response.data.message || "Creating comment failed.",
                    status: error.response.status,
                  }
                : {
                    error: "An unexpected error occurred.",
                  },
          });
        }
      },
      getComments: async (blogId: string) => {
        set({ ...initialState, loading: true });
        const url = await getApiUrl();
        try {
          const response = await apiClient.get(
            `${url}/api/v1/blogs/${blogId}/comments`,
          );
          set({ ...initialState, success: true, comments: response.data });
        } catch (error) {
          set({
            ...initialState,
            success: false,
            error: true,
            errorData:
              axios.isAxiosError(error) && error.response
                ? {
                    error:
                      error.response.data.message || "Getting comments failed.",
                    status: error.response.status,
                  }
                : {
                    error: "An unexpected error occurred.",
                  },
          });
        }
      },
      //   likeComment: async () => {},
      //   dislikeComment: async () => {},
    }),
    {
      name: "comments",
      storage,
    },
  ),
);
