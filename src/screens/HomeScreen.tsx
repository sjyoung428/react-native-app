import { Counter } from "@components/counter";
import { useCounterStore } from "@store/useCounterStore";
import GlobalStyles from "@utils/GlobalStyles";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const { count } = useCounterStore();

  return (
    <View style={GlobalStyles.container}>
      <Text>Home Screen</Text>
      <Counter />
      <Text>{count}</Text>
    </View>
  );
};

export default HomeScreen;
