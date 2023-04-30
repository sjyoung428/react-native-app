import type { Post } from "@/types/post";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PostItemProps {
  item: Post;
}

const PostItem = ({ item }: PostItemProps) => {
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

export default PostItem;

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
});
