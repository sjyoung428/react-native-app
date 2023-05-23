import { TouchableButton } from "@/components/common";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { Text, View } from "react-native";
import useFeed from "@/hooks/queries/feed/useFeed";

const HomeScreen = () => {
  const { mutate } = useFeed({
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const onPress = () => {
    mutate();
  };
  return (
    <View style={GlobalStyles.container}>
      <Text>Home Screen</Text>
      <TouchableButton onPress={onPress}>사료 사출 버튼</TouchableButton>
    </View>
  );
};

export default HomeScreen;
