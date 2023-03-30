import { api } from "./axios";

export const AuthAPI = {
  // login: async ({ email, password }: { email: string; password: string }) => {
  //   const res = await api.post("auth/login", { username: email, password });

  //   return res.data;
  // },
  login: async ({ email, password }: { email: string; password: string }) => {
    const res = await api.post("auth/login", {
      username: "kminchelle",
      password: "0lelplR",
    });

    return res.data;
  },
};
