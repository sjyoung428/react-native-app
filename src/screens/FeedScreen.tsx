import { TouchableButton } from "@/components/common";
import GlobalStyles from "@/utils/styles/GlobalStyles";
import { View } from "react-native";
import useFeed from "@/hooks/queries/feed/useFeed";
import Countdown from "@/components/common/Countdown";
import { useTimerStore } from "@/store/useTimerStore";

const FeedScreen = () => {
  const { time, setTime } = useTimerStore();

  const { mutate } = useFeed();

  const onFeed = () => {
    mutate();
  };
  return (
    <View style={GlobalStyles.container}>
      <Countdown
        time={time}
        onFinish={() => {
          // onFeed();
        }}
      />
      <TouchableButton
        onPress={() => {
          onFeed();
          setTime(10);
        }}
      >
        사료 사출 버튼
      </TouchableButton>
    </View>
  );
};

export default FeedScreen;
