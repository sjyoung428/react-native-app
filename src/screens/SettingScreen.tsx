import GlobalStyles from "@utils/styles/GlobalStyles";
import { Text } from "react-native-paper";
import { View } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { TouchableText } from "@components/common";
import { useAuthTokenStore } from "@store/useAuthTokenStore";

const SettingScreen = () => {
  const toast = useToast();
  const { removeAuthToken } = useAuthTokenStore();

  return (
    <View style={GlobalStyles.container}>
      <Text>Setting Screen</Text>
      <TouchableText
        onPress={() => {
          removeAuthToken();
          toast.show("로그아웃 성공");
        }}
      >
        로그아웃
      </TouchableText>
    </View>
  );
};

export default SettingScreen;
