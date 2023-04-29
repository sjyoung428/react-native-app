import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { Article } from "@/types/article";
// import type { Article } from "@/types/article";

export const ArticleAPI = {
  getAll: async (userId: string) => {
    const res: AxiosResponse<Article[]> = await api.get(`article/${userId}`);
    return res.data;
  },

  getById: async ({ userId, id }: { userId: string; id: string }) => {
    const res: AxiosResponse<Article> = await api.get(
      `article/${userId}/${id}`
    );
    return res.data;
  },

  create: async (formData: FormData) => {
    const res: AxiosResponse<{ message: string }> = await api.post(
      "article/add",
      formData
    );
    return res.data;
  },
};
