import { TouchableText, ValidInput } from "@/components/common";
import { TouchableButton } from "@/components/common";
import { useSignUp } from "@/hooks/queries/auth";
import { RootStackParamList } from "@/navigations/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { colors } from "@/utils/styles/colors";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { validator } from "@/utils/validator";
import { useState } from "react";
import { View } from "react-native";
import { useToast } from "react-native-toast-notifications";

interface SignUpScreenProps
  extends NativeStackScreenProps<RootStackParamList> {}

const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { mutate } = useSignUp({
    onSuccess: () => {
      toast.show("회원가입 성공");
      navigation.goBack();
    },
  });

  const emailValidation = validator(email, "email");
  const usernameValidation = validator(username, "username");
  const passwordValidation = validator(password, "password");

  const onPressSignUp = () => {
    if (
      emailValidation === false ||
      passwordValidation === false ||
      usernameValidation === false
    )
      return;

    mutate({ email, password, username });
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
        type="username"
        value={username}
        onChangeText={setUsername}
        validator={() => !usernameValidation}
        errorMessage="2글자 이상"
      />
      <ValidInput
        type="password"
        value={password}
        onChangeText={setPassword}
        validator={() => !passwordValidation}
        errorMessage="8글자 이상"
      />
      <TouchableButton onPress={onPressSignUp}>Sign up</TouchableButton>
      <TouchableText
        style={{ marginTop: 20, color: colors.gray7 }}
        onPress={() => navigation.goBack()}
      >
        Already have an account?
      </TouchableText>
    </View>
  );
};

export default SignUpScreen;
