import { useGetArticles } from "@/hooks/queries/article";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import React from "react";
import { Text, View } from "react-native";
import { useToast } from "react-native-toast-notifications";

const ArticleScreen = () => {
  const toast = useToast();

  useGetArticles({
    onSuccess: (articles) => {
      toast.show("게시글 불러오기 성공");
      console.log(articles);
    },
  });
  return (
    <View style={GlobalStyles.container}>
      <Text>Article</Text>
    </View>
  );
};

export default ArticleScreen;
