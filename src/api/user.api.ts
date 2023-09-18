import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { User } from "@/types/user";

export const UserAPI = {
  getMe: async () => {
    const res: AxiosResponse<User> = await api("/users/me");
    return res.data;
  },

  updateMe: async ({ username }: { username: string }) => {
    const res: AxiosResponse<User> = await api.patch("/users/me", {
      username,
    });
    return res.data;
  },
  uploadAvatar: async (formData: FormData) => {
    const res: AxiosResponse<User> = await api.post(
      "/users/me/avatar",
      formData
    );
    return res.data;
  },
};
