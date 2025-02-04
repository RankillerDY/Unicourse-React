import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Course } from "../types/home";

interface ResponseData {
  data: Course[]; // Danh sách banner
  message: string; //
  status: number; // Trạng thái trả về của API
}
interface getAllCoursesBody {
  page: number;
  pageSize: number;
  orderBy: { price: "asc" | "desc" };
  where: {
    status: { equals: "PUBLISHED" | "CLOSED" | "DRAFT" };
    price: { gt: number };
  };
}
const apiPath = import.meta.env.VITE_SERVER_DEPLOY;

function calculator(a: number, b: number) {
  return a * b;
}

export const courseApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiPath}`,
  }),
  endpoints(builder) {
    return {
      fetchCourses: builder.query<ResponseData, getAllCoursesBody>({
        query: (body) => ({
          url: "courses",
          method: "POST",
          body: body,
        }),
      }),
    };
  },
});

export const { useFetchCoursesQuery } = courseApi;
