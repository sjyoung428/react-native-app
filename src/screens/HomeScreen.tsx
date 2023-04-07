import { useAuthTokenStore } from "@store/useAuthTokenStore";
import GlobalStyles from "@utils/styles/GlobalStyles";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = () => {
  const { authToken, removeAuthToken } = useAuthTokenStore();

  const onLogout = () => {
    // 로그아웃 처리
    removeAuthToken();
  };

  return (
    <View style={GlobalStyles.container}>
      <Text>Home Screen</Text>
      <Button onPress={onLogout}>로그아웃</Button>
    </View>
  );
};

export default HomeScreen;
