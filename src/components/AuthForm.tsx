// AuthScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLogin, useSignUp } from "@/hooks/queries/auth";
import {
  TouchableButton,
  TouchableText,
  ValidInput,
} from "@/components/common";
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "@/utils/validator";
import { useToast } from "react-native-toast-notifications";
import { useAuthTokenStore } from "@/store/useAuthTokenStore";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const toast = useToast();

  const { setAuthToken } = useAuthTokenStore();

  const { mutate: login } = useLogin({
    onSuccess: (data) => {
      setAuthToken(data.token);
      toast.show("로그인 성공");
    },
    onError: () => {
      toast.show("로그인 실패");
    },
  });

  const { mutate: signUp } = useSignUp({
    onSuccess: () => {
      toast.show("회원가입 성공");
      setIsSignUp(false);
    },
    onError: () => {
      toast.show("회원가입 실패");
    },
  });

  const handleAuth = () => {
    if (isSignUp) {
      signUp({ email, password, username });
    } else {
      login({ email, password });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignUp ? "Sign Up" : "Login"}</Text>
      {isSignUp && (
        <ValidInput
          type="username"
          onChangeText={setUsername}
          value={username}
          validator={() => !usernameValidator(username)}
          errorMessage="2 글자 이상"
        />
      )}
      <ValidInput
        type="email"
        onChangeText={setEmail}
        value={email}
        validator={() => !emailValidator(email)}
        errorMessage="이메일 형식에 맞게 입력하시오"
      />
      <ValidInput
        type="password"
        onChangeText={setPassword}
        value={password}
        validator={() => !passwordValidator(password)}
        errorMessage="비밀번호 형식에 맞게 입력하시오"
      />

      <TouchableButton onPress={handleAuth}>
        {isSignUp ? "Sign Up" : "Login"}
      </TouchableButton>

      <TouchableText
        style={styles.switchText}
        onPress={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </TouchableText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  switchText: {
    marginTop: 10,
  },
});

export default AuthForm;
