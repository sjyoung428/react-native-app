import { ValidInput } from "@components/common";
import { TouchableButton } from "@components/common/TouchableButton";
import GlobalStyles from "@utils/styles/GlobalStyles";
import { useState } from "react";
import { View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hasEmailError = () => {
    return email.length > 0 && !email.includes("@"); // 임시
  };

  const hasPasswordError = () => {
    return password.length > 0 && password.length < 4; // 임시
  };

  return (
    <View style={GlobalStyles.container}>
      <ValidInput
        type="email"
        value={email}
        onChangeText={setEmail}
        validator={hasEmailError}
        errorMessage="이메일을 올바르게 입력하시오"
      />
      <ValidInput
        type="password"
        value={password}
        onChangeText={setPassword}
        validator={hasPasswordError}
        errorMessage="비밀번호를 올바르게 입력하시오"
      />

      <TouchableButton>Login</TouchableButton>
    </View>
  );
};

export default LoginScreen;
