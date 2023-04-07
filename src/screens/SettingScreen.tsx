import GlobalStyles from "@utils/styles/GlobalStyles";
import { Button, Text } from "react-native-paper";
import { View } from "react-native";
import { useToast } from "react-native-toast-notifications";

const SettingScreen = () => {
  const toast = useToast();

  return (
    <View style={GlobalStyles.container}>
      <Text>Setting Screen</Text>
      <Button
        mode="outlined"
        onPress={async () => {
          toast.show("Setting Screen");
        }}
      >
        토스트
      </Button>
    </View>
  );
};

export default SettingScreen;
