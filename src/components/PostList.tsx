import { useGetPosts } from "@/hooks/queries/post";
import React from "react";
import { FlatList } from "react-native";
import { Loader } from "./common";
import PostItem from "./PostItem";

const PostList = () => {
  const { data, isLoading } = useGetPosts();

  return (
    <FlatList
      data={data && data["posts"]}
      renderItem={PostItem}
      onEndReached={() => {
        console.log("onEndReached");
      }}
      ListFooterComponent={() => (isLoading ? Loader() : null)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PostList;
