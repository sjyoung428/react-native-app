import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { Article } from "@/types/article";
// import type { Article } from "@/types/article";

export const ArticleAPI = {
  getAll: async () => {
    const res: AxiosResponse<Article[]> = await api.get("articles");
    return res.data;
  },

  getById: async (id: string) => {
    const res: AxiosResponse<Article> = await api.get(`articles/${id}`);
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
