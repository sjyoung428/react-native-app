import { api } from "@api/axios";
import { Counter } from "@components/counter";
import { useCounterStore } from "@store/useCounterStore";
import GlobalStyles from "@utils/GlobalStyles";
import { Text, View } from "react-native";
import { DUMMY_API_BASE_URL } from "@env";

const HomeScreen = () => {
  const { count } = useCounterStore();
  console.log(DUMMY_API_BASE_URL);

  return (
    <View style={GlobalStyles.container}>
      <Text>Home Screen</Text>
      <Counter />
      <Text>{count}</Text>
    </View>
  );
};

export default HomeScreen;
