import { PostAPI } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptionsOf } from "../types";

const useGetPostById = (
  id: string,
  options: UseQueryOptionsOf<typeof PostAPI.getById, typeof getKey> = {}
) => {
  return useQuery(getKey(id), getFetcher(id), options);
};

const getKey = (id: string) => ["post", id];
const getFetcher = (id: string) => async () => await PostAPI.getById(id);

useGetPostById.getKey = getKey;
useGetPostById.getFetcher = getFetcher;

export default useGetPostById;
