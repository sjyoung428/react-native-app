import { StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { type Props as ButtonProps } from "react-native-paper/lib/typescript/src/components/Button/Button";

interface TouchableButtonProps extends ButtonProps {
  size?: "small" | "medium" | "large";
}

const TouchableButton = ({
  children,
  size = "medium",
  ...rest
}: TouchableButtonProps) => {
  return (
    <TouchableOpacity
      style={
        size === "small"
          ? styles.small
          : size === "medium"
          ? styles.medium
          : styles.large
      }
      activeOpacity={0.8}
    >
      <Button {...rest} mode="contained-tonal">
        {children}
      </Button>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  small: {
    width: "40%",
  },
  medium: {
    width: "60%",
  },
  large: {
    width: "80%",
  },
});
