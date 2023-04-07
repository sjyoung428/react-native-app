import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { ValidInputStyles } from "./ValidInput.styles";

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
        style={ValidInputStyles.input}
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
