"use server";

import axios from "axios";

const apiUrl = process.env.API_URL;
const fetchBlogById = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/api/v1/blogs/${id}`);
    return response.data;
  } catch (error) {
    return {
      message:
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
          ? error.response.data.message
          : "Something went wrong",
      status_code:
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    };
  }
};
export { fetchBlogById };
