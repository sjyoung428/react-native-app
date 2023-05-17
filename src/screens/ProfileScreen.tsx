import { TouchableText } from "@/components/common";
import { useGetMe } from "@/hooks/queries/user";
import { useAuthTokenStore } from "@/store/useAuthTokenStore";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";

const ProfileScreen = () => {
  const { data, isLoading } = useGetMe();

  const toast = useToast();
  const { removeAuthToken } = useAuthTokenStore();
  return (
    <View style={GlobalStyles.container}>
      <Text>Profile Screen</Text>
      <Text>{isLoading ? "로딩중" : data?.email}</Text>
      <TouchableText
        onPress={() => {
          removeAuthToken();
          toast.show("로그아웃 성공");
        }}
      >
        로그아웃
      </TouchableText>
    </View>
  );
};

export default ProfileScreen;
