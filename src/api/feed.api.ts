import { feed } from "./axios.instance";

export const FeedAPI = {
  feed: async () => {
    const res = await feed.post("/feed");
    return res.data;
  },
};
