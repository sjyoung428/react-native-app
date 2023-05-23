import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptionsOf } from "../types";
import { FeedAPI } from "@/api/feed.api";

const useFeed = (options: UseMutationOptionsOf<typeof FeedAPI.feed> = {}) => {
  return useMutation(FeedAPI.feed, options);
};

export default useFeed;
