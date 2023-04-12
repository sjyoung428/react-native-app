import { ToDoAPI } from "@/api/todo.api";
import { useQuery } from "@tanstack/react-query";
import { UseQueryOptionsOf } from "../types";

const useGetTodos = (
  options: UseQueryOptionsOf<typeof ToDoAPI.getAll, typeof getKey> = {}
) => {
  return useQuery(getKey(), getFetcher(), options);
};

const getKey = () => ["todos"];
const getFetcher = () => async () => await ToDoAPI.getAll();

useGetTodos.getKey = getKey;
useGetTodos.getFetcher = getFetcher;

export default useGetTodos;
