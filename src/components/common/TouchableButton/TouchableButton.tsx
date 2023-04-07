import { StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { type Props as ButtonProps } from "react-native-paper/lib/typescript/src/components/Button/Button";

interface TouchableButtonProps extends ButtonProps {}

const TouchableButton = ({ children, ...rest }: TouchableButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Button {...rest} mode="contained-tonal">
        {children}
      </Button>
    </TouchableOpacity>
  );
};

export default TouchableButton;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
});
