import { ValidInput } from "@components/common";
import { TouchableButton } from "@components/common";
import { useLogin } from "@hooks/queries/auth";
import { useAuthTokenStore } from "@store/useAuthTokenStore";
import GlobalStyles from "@utils/styles/GlobalStyles";
import { validator } from "@utils/validator";
import { useState } from "react";
import { View } from "react-native";
import { useToast } from "react-native-toast-notifications";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuthTokenStore();
  const toast = useToast();
  const { mutate } = useLogin({
    onSuccess: (data) => {
      toast.show("로그인 성공");
      setAuthToken(data.token);
    },
  });

  const emailValidation = validator(email, "email");
  const passwordValidation = validator(password, "password");

  const onPressLogin = () => {
    if (emailValidation === false || passwordValidation === false) return;

    mutate({ email, password });
  };

  return (
    <View style={GlobalStyles.container}>
      <ValidInput
        type="email"
        value={email}
        onChangeText={setEmail}
        validator={() => !emailValidation}
        errorMessage="이메일을 올바르게 입력하시오"
      />
      <ValidInput
        type="password"
        value={password}
        onChangeText={setPassword}
        validator={() => !passwordValidation}
        errorMessage="비밀번호를 올바르게 입력하시오"
      />

      <TouchableButton onPress={onPressLogin}>Login</TouchableButton>
    </View>
  );
};

export default LoginScreen;
