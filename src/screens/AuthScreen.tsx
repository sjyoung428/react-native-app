import React, { useState } from "react";
import LoginScreen from "react-native-login-screen";

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginScreen
      logoImageSource={undefined}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={setUsername}
      onPasswordChange={setPassword}
      enablePasswordValidation
      disableSocialButtons={true}
    />
  );
};

export default AuthScreen;
