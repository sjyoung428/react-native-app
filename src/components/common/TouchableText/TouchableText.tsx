import React from "react";
import { TouchableOpacity } from "react-native";
import type { MD3TypescaleKey} from "react-native-paper";
import { Text } from "react-native-paper";
import type { Props as TextProps } from "react-native-paper/lib/typescript/src/components/Typography/Text";

type TouchableTextProps = TextProps<MD3TypescaleKey>

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
