import { Loader, TouchableText, ValidInput } from "@/components/common";
import { useGetMe, useUpdateMe } from "@/hooks/queries/user";
import { useAuthTokenStore } from "@/store/useAuthTokenStore";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { usernameValidator } from "@/utils/validator";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";

const ProfileForm = () => {
  const [isChange, setIsChange] = useState(false);
  const [username, setUsername] = useState("");
  const { data, isLoading } = useGetMe();
  const queryClient = useQueryClient();

  const { mutate: changeUsername } = useUpdateMe({
    onSuccess: async () => {
      await queryClient.refetchQueries(useGetMe.getKey());
      toast.show("닉네임 변경 성공");
      setIsChange(false);
    },
  });

  const toast = useToast();
  const { removeAuthToken } = useAuthTokenStore();

  const onPressChange = () => {
    changeUsername({ username });
  };

  if (isLoading || !data) {
    return (
      <View style={GlobalStyles.container}>
        <Text>Profile Screen</Text>
        <Loader />
      </View>
    );
  }

  return (
    <View style={GlobalStyles.container}>
      {isChange ? (
        <ValidInput
          type="username"
          value={username}
          validator={() => !usernameValidator(username)}
          onChangeText={setUsername}
          errorMessage="두 글자 이상"
        />
      ) : (
        <Text>닉네임: {data.username}</Text>
      )}
      <Button onPress={() => setIsChange((prev) => !prev)}>
        {isChange ? "취소" : "변경하기"}
      </Button>
      {isChange && <Button onPress={onPressChange}>변경하기</Button>}
      <Text>이메일: {data.email}</Text>
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

export default ProfileForm;
