import type { AxiosResponse } from "axios";
import { api } from "./axios.instance";
import type { Todo } from "@/types/todo";

export const ToDoAPI = {
  getAll: async () => {
    const res: AxiosResponse<Todo[]> = await api.get("todos");
    return res.data;
  },

  getById: async (id: string) => {
    const res: AxiosResponse<Todo> = await api.get(`todos/${id}`);
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
    const res: AxiosResponse<Todo> = await api.post("todos/add", {
      title,
      completed,
      userId,
    });
    return res.data;
  },
};
