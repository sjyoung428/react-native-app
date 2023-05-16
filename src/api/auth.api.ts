import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { User } from "@/types/user";

export const AuthAPI = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const res: AxiosResponse<User> = await api.post("/auth/login", {
      email,
      password,
    });

    return res.data;
  },

  signUp: async ({ email, password }: { email: string; password: string }) => {
    const res: AxiosResponse<{ message: string }> = await api.post(
      "/auth/signup",
      {
        email,
        password,
      }
    );

    return res.data;
  },
};
