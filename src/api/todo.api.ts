import { api } from "./axios";
import type { Todo } from "@/types/todo";

export const ToDoAPI = {
  getAll: async <T = Todo[]>(): Promise<T> => {
    const res = await api.get<T>("todos");
    return res.data;
  },

  getById: async <T = Todo>(id: string): Promise<T> => {
    const res = await api.get<T>(`todos/${id}`);
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
