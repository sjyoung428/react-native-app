import React from "react";
import { StyleSheet } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

interface ValidInputProps {
  type: "email" | "password" | "username";
  value: string;
  onChangeText: (text: string) => void;
  validator: (text: string) => boolean;
  errorMessage: string;
}

const ValidInput = ({
  type,
  value,
  onChangeText,
  validator,
  errorMessage,
}: ValidInputProps) => {
  return (
    <>
      <TextInput
        mode="outlined"
        style={styles.input}
        label={type}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={type === "password"}
      />
      <HelperText type="error" visible={validator(value)}>
        {errorMessage}
      </HelperText>
    </>
  );
};

export default ValidInput;

export const styles = StyleSheet.create({
  input: {
    width: "80%",
  },
});
