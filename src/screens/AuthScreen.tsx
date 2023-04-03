import { useLogin, useSignUp } from "@hooks/queries/auth";
import React, { useState } from "react";
import LoginScreen from "react-native-login-screen";
import { Text } from "react-native-paper";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, data, error } = useLogin();
  const { mutate: signUp, data: signUpData } = useSignUp();

  const handleLogin = () => {
    mutate({ email: username, password });
  };

  const handleSignUp = () => {
    signUp({ email: username, password });
  };

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
