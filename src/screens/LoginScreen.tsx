import { TouchableText, ValidInput } from "@/components/common";
import { TouchableButton } from "@/components/common";
import { useLogin } from "@/hooks/queries/auth";
import { RootStackParamList } from "@/navigations/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuthTokenStore } from "@/store/useAuthTokenStore";
import { colors } from "@/utils/styles/colors";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { validator } from "@/utils/validator";
import { useState } from "react";
import { View } from "react-native";
import { useToast } from "react-native-toast-notifications";

interface LoginScreenProps extends NativeStackScreenProps<RootStackParamList> {}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
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

  const onPressAccount = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={GlobalStyles.container}>
      <ValidInput
        type="email"
        value={email}
        onChangeText={setEmail}
        validator={() => !emailValidation}
        errorMessage="이메일형식에 맞게 입력하시오"
      />
      <ValidInput
        type="password"
        value={password}
        onChangeText={setPassword}
        validator={() => !passwordValidation}
        errorMessage="비밀번호를 올바르게 입력하시오"
      />
      <TouchableButton onPress={onPressLogin}>Login</TouchableButton>
      <TouchableText
        style={{ marginTop: 20, color: colors.gray7 }}
        onPress={onPressAccount}
      >
        Create an account
      </TouchableText>
    </View>
  );
};

export default LoginScreen;
