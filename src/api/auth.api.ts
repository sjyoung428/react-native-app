import { api } from "./axios";

export const AuthAPI = {
  login: async ({ email, password }: { email: string; password: string }) => {
    const res = await api.post("auth/login", {
      username: "kminchelle",
      password: "0lelplR",
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
    const res = await api.post("users/add", {
      email,
      password,
      username,
      age: 1000,
    });

    return res.data;
  },
};
