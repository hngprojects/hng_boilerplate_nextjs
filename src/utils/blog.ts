// "use server";

// export const getSingleBlog = async (blogId: string) => {
//   try {
//     const response = await apiClient.get(`/api/v1/blogs/${blogId}`);
//     return response.data;
//   } catch (error) {
//     return axios.isAxiosError(error) && error.response
//       ? {
//           error: error.response.data.message || "Registration failed.",
//           status: error.response.status,
//         }
//       : {
//           error: "An unexpected error occurred.",
//         };
//   }
// };
