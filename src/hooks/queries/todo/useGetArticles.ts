import { ArticleAPI } from "@/api/airticle.api";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptionsOf } from "../types";

const useGetArticles = (
  userId: string,
  options: UseQueryOptionsOf<typeof ArticleAPI.getAll, typeof getKey> = {}
) => {
  return useQuery(getKey(), getFetcher(userId), options);
};

const getKey = () => ["todos"];
const getFetcher = (id: string) => async () => await ArticleAPI.getAll(id);

useGetArticles.getKey = getKey;
useGetArticles.getFetcher = getFetcher;

export default useGetArticles;
