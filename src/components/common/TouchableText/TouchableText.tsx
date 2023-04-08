import React from "react";
import { TouchableOpacity } from "react-native";
import { MD3TypescaleKey, Text } from "react-native-paper";
import { Props as TextProps } from "react-native-paper/lib/typescript/src/components/Typography/Text";

interface TouchableTextProps extends TextProps<MD3TypescaleKey> {}

const TouchableText = ({
  children,
  onPress,
  variant = "bodyMedium",
  ...rest
}: TouchableTextProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Text variant={variant} {...rest}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableText;
