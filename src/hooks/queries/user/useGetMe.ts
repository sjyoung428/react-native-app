import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptionsOf } from "../types";
import { UserAPI } from "@/api/user.api";

const useGetMe = (
  options: UseQueryOptionsOf<typeof UserAPI.getMe, typeof getKey> = {}
) => {
  return useQuery(getKey(), getFetcher(), options);
};

const getKey = () => ["me"];
const getFetcher = () => async () => await UserAPI.getMe();

useGetMe.getKey = getKey;
useGetMe.getFetcher = getFetcher;

export default useGetMe;
