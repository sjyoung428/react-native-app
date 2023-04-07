import { ValidInput } from "@components/common";
import { TouchableButton } from "@components/common";
import { useLogin } from "@hooks/queries/auth";
import GlobalStyles from "@utils/styles/GlobalStyles";
import { validator } from "@utils/validator";
import { useState } from "react";
import { View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useLogin({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onPressLogin = () => {
    mutate({ email, password });
  };

  return (
    <View style={GlobalStyles.container}>
      <ValidInput
        type="email"
        value={email}
        onChangeText={setEmail}
        validator={() => !validator(email, "email")}
        errorMessage="이메일을 올바르게 입력하시오"
      />
      <ValidInput
        type="password"
        value={password}
        onChangeText={setPassword}
        validator={() => !validator(password, "password")}
        errorMessage="비밀번호를 올바르게 입력하시오"
      />

      <TouchableButton onPress={onPressLogin}>Login</TouchableButton>
    </View>
  );
};

export default LoginScreen;
