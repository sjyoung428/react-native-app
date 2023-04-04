import { useLogin, useSignUp } from "@hooks/queries/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthTokenStore } from "@store/useAuthTokenStore";
import React, { useState } from "react";
import LoginScreen from "react-native-login-screen";
import { Text } from "react-native-paper";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuthTokenStore();

  const { mutate: login, data: loginData } = useLogin({
    onSuccess: (data) => {
      setAuthToken(data.token);
    },
  });
  const { mutate: signUp, data: signUpData } = useSignUp();

  const handleLogin = () => {
    login({ email: username, password });
  };

  const handleSignUp = () => {
    signUp({ email: username, password });
  };
  console.log(loginData);
  console.log(signUpData);
  return (
    <LoginScreen
      logoImageSource={undefined}
      onLoginPress={handleLogin}
      onSignupPress={handleSignUp}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
      enablePasswordValidation={true}
      disableSocialButtons={true}
      disablePasswordTooltip={true}
    />
  );
};

export default AuthScreen;
