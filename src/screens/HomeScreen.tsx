import { Counter } from "@components/counter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthTokenStore } from "@store/useAuthTokenStore";
import { useCounterStore } from "@store/useCounterStore";
import GlobalStyles from "@utils/GlobalStyles";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = () => {
  const {
    authToken,
    actions: { removeAuthToken },
  } = useAuthTokenStore();

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
