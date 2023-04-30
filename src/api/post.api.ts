import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { Post } from "@/types/post";

export const PostAPI = {
  getAll: async () => {
    const res: AxiosResponse<{ posts: Post[] }> = await api.get("/posts");
    return res.data;
  },

  getById: async (id: string) => {
    const res: AxiosResponse<Post> = await api.get(`/posts/${id}`);
    return res.data;
  },

  create: async (formData: FormData) => {
    const res: AxiosResponse<{ message: string }> = await api.post(
      "posts/create",
      formData
    );
    return res.data;
  },
};
