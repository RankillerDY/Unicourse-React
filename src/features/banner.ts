import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dotenv from "dotenv";

export interface Banner {
  id: number; // ID duy nhất của banner
  title: string; // Tiêu đề của banner
  type: "PROMOTION" | string; // Loại banner (PROMOTION, ANNOUNCEMENT, v.v.)
  img: string; // URL của ảnh banner
  path: string | null; // Đường dẫn nội bộ hoặc null
  href: string | null; // Đường dẫn bên ngoài hoặc null
  status: "PUBLISHED" | "DRAFT" | "CLOSED" | string; // Trạng thái của banner
  created_at: string; // Thời gian tạo (ISO 8601 string)
  updated_at: string; // Thời gian cập nhật (ISO 8601 string)
}
//Load file .env
dotenv.config();
const apiPath = process.env.SERVER_DEPLOY;

export const bannerApi = createApi({
  reducerPath: "banners",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiPath}`,
  }),
  endpoints(builder) {
    return {
      fetchBanners: builder.query<Banner, void>({
        query: () => "banners",
      }),
    };
  },
});

export const { useFetchBannersQuery } = bannerApi;
