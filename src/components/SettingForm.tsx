import { Loader, ValidInput } from "@/components/common";
import { useGetMe, useUpdateMe } from "@/hooks/queries/user";
import { useAuthTokenStore } from "@/store/useAuthTokenStore";
import { useAvatarStore } from "@/store/useAvatarStore";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { usernameValidator } from "@/utils/validator";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { useToast } from "react-native-toast-notifications";
import Icon from "react-native-vector-icons/AntDesign";
import Avatar from "./common/Avatar";
import { colors } from "@/utils/styles/colors";

const SettingForm = () => {
  const [isChange, setIsChange] = useState(false);
  const [username, setUsername] = useState("");
  const { image } = useAvatarStore();
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
      {/* {isChange ? (
        <ValidInput
          type="username"
          value={username}
          validator={() => !usernameValidator(username)}
          onChangeText={setUsername}
          errorMessage="두 글자 이상"
        />
      ) : (
        <Text>닉네임: {data.username}</Text>
      )} */}
      {/* <Button onPress={() => setIsChange((prev) => !prev)}>
        {isChange ? "취소" : "변경하기"}
      </Button> */}

      {/* {isChange && <Button onPress={onPressChange}>변경하기</Button>} */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "80%",
          justifyContent: "flex-start",
          gap: 4,
        }}
      >
        <Avatar image={image} size={40} />
        <View>
          <Text>{data.username}</Text>
          <Text>{data.email}</Text>
        </View>
      </View>
      <Divider style={{ width: "80%", marginVertical: 10 }} bold />
      <Pressable
        style={{
          flexDirection: "row",
          gap: 3,
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
        onPress={() => {
          removeAuthToken();
          toast.show("로그아웃 성공");
        }}
      >
        <Icon name="logout" size={20} style={{ color: "gray" }} />
        <Text variant="titleMedium" style={{ color: "gray" }}>
          로그아웃
        </Text>
      </Pressable>
    </View>
  );
};

export default SettingForm;
