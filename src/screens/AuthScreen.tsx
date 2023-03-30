import { useLogin } from "@hooks/queries/auth";
import React, { useState } from "react";
import LoginScreen from "react-native-login-screen";
import { Text } from "react-native-paper";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, data, error } = useLogin();

  const handleLogin = () => {
    mutate({ email: username, password });
  };
  console.log(data);
  return (
    <LoginScreen
      logoImageSource={undefined}
      onLoginPress={handleLogin}
      onSignupPress={() => {}}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
      enablePasswordValidation={true}
      disableSocialButtons={true}
      disablePasswordTooltip={true}
    />
  );
};

export default AuthScreen;
