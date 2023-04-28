import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { User } from "@/types/user";

export const AuthAPI = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const res: AxiosResponse<User> = await api.post("signin", {
      email,
      password,
    });

    return res.data;
  },

  signUp: async ({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }) => {
    const res: AxiosResponse<{ message: string }> = await api.post("signup", {
      email,
      password,
      username,
    });

    return res.data;
  },
};
