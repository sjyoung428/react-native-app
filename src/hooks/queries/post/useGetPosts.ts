import { PostAPI } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptionsOf } from "../types";

const useGetPosts = (
  options: UseQueryOptionsOf<typeof PostAPI.getAll, typeof getKey> = {}
) => {
  return useQuery(getKey(), getFetcher(), options);
};

const getKey = () => ["articles"];
const getFetcher = () => async () => await PostAPI.getAll();

useGetPosts.getKey = getKey;
useGetPosts.getFetcher = getFetcher;

export default useGetPosts;
