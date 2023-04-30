import { useGetPosts } from "@/hooks/queries/post";
import type { Post } from "@/types/post";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Image, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const renderItem = ({ item }: { item: Post }) => {
  return (
    <View style={styles.itemWrapperStyle}>
      <Image style={styles.itemImageStyle} source={{ uri: item.image }} />
      <View style={styles.contentWrapperStyle}>
        <Text style={styles.textNameStyle}>{`${item.title}`}</Text>
        <Text style={styles.textDescriptionStyle}>{item.description}</Text>
      </View>
    </View>
  );
};

const PostScreen = () => {
  const { data, isLoading } = useGetPosts();

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={data && data["posts"]}
      renderItem={renderItem}
      onEndReached={() => {
        console.log("onEndReached");
      }}
      ListFooterComponent={renderLoader}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  textNameStyle: {
    fontSize: 16,
  },
  textDescriptionStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
