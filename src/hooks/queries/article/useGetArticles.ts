import { ArticleAPI } from "@/api/airticle.api";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptionsOf } from "../types";

const useGetArticles = (
  options: UseQueryOptionsOf<typeof ArticleAPI.getAll, typeof getKey> = {}
) => {
  return useQuery(getKey(), getFetcher(), options);
};

const getKey = () => ["articles"];
const getFetcher = () => async () => await ArticleAPI.getAll();

useGetArticles.getKey = getKey;
useGetArticles.getFetcher = getFetcher;

export default useGetArticles;
