import { ArticleAPI } from "@/api/airticle.api";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptionsOf } from "../types";

const useArticleById = (
  id: string,
  options: UseQueryOptionsOf<typeof ArticleAPI.getById, typeof getKey> = {}
) => {
  return useQuery(getKey(id), getFetcher(id), options);
};

const getKey = (id: string) => ["todos", id];
const getFetcher = (id: string) => async () =>
  await ArticleAPI.getById({ userId: "1", id });

useArticleById.getKey = getKey;
useArticleById.getFetcher = getFetcher;

export default useArticleById;
