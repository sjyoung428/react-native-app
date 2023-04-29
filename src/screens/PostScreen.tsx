import { useGetPosts } from "@/hooks/queries/post";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useToast } from "react-native-toast-notifications";

const PostScreen = () => {
  const toast = useToast();

  const { data } = useGetPosts({
    onSuccess: (posts) => {
      toast.show("게시글 불러오기 성공");
      console.log(posts);
    },
  });
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={GlobalStyles.container}>
          <Text>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PostScreen;
