import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { Post } from "@/types/post";

export const PostAPI = {
  getAll: async () => {
    const res: AxiosResponse<Post[]> = await api.get("posts");
    return res.data;
  },

  getById: async (id: string) => {
    const res: AxiosResponse<Post> = await api.get(`post/${id}`);
    return res.data;
  },

  create: async (formData: FormData) => {
    const res: AxiosResponse<{ message: string }> = await api.post(
      "post/create",
      formData
    );
    return res.data;
  },
};
