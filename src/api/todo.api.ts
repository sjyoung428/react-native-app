import { api } from "./axios";

export const ToDoAPI = {
  getAll: async () => {
    const res = await api.get("todos");
    return res.data;
  },

  getById: async (id: string) => {
    const res = await api.get(`todos/${id}`);
    return res.data;
  },

  create: async ({
    title,
    completed,
    userId,
  }: {
    title: string;
    completed: boolean;
    userId: string;
  }) => {
    const res = await api.post("todos/add", { title, completed, userId });
    return res.data;
  },
};
