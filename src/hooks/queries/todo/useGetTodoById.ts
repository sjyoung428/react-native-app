import { ToDoAPI } from "@/api/todo.api";
import { useQuery } from "@tanstack/react-query";
import { UseQueryOptionsOf } from "../types";

const useGetTodoById = (
  id: string,
  options: UseQueryOptionsOf<typeof ToDoAPI.getById, typeof getKey> = {}
) => {
  return useQuery(getKey(id), getFetcher(id), options);
};

const getKey = (id: string) => ["todos", id];
const getFetcher = (id: string) => async () => await ToDoAPI.getById(id);

useGetTodoById.getKey = getKey;
useGetTodoById.getFetcher = getFetcher;

export default useGetTodoById;
