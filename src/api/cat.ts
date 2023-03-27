import { api } from "./axios";

export const catApi = {
  getCat: async (): Promise<{ data: string[] }> => {
    const { data } = await api.get("https://meowfacts.herokuapp.com/");

    return data;
  },
};
