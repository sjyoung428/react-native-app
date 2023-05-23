import { api } from "./axios.instance";

export const FeedAPI = {
  feed: async () => {
    const res = await api.post("/feed");
    return res.data;
  },
};
