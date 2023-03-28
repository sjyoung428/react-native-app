import GlobalStyles from "@utils/GlobalStyles";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { useEffect } from "react";
import { useToast } from "react-native-toast-notifications";

const SettingScreen = () => {
  const toast = useToast();

  useEffect(() => {
    toast.show("Setting Screen");
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <Text>Setting Screen</Text>
    </View>
  );
};

export default SettingScreen;
