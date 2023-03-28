import { ToDoAPI } from "@api/todo.api";
import { useQuery } from "@tanstack/react-query";

const useGetTodos = () => {
  return useQuery(getKey(), getFetcher());
};

const getKey = () => ["todos"];
const getFetcher = () => async () => await ToDoAPI.getAll();

useGetTodos.getKey = getKey;
useGetTodos.getFetcher = getFetcher;

export default useGetTodos;
