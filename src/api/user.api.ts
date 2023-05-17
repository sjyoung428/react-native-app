import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { User } from "@/types/user";

export const UserAPI = {
  getMe: async () => {
    const res: AxiosResponse<User> = await api("/user/me");
    return res.data;
  },

  updateMe: async (username: string) => {
    const res: AxiosResponse<User> = await api.patch("/user/me", {
      username,
    });
    return res.data;
  },
};
