import { useCounterStore } from "@store/useCounterStore";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const { increment: setStoreCount } = useCounterStore();

  return (
    <View>
      <Text>{count}</Text>
      <Button
        mode="outlined"
        onPress={() => {
          setCount(count + 1);
        }}
      >
        로컬증가
      </Button>
      <Button
        mode="contained"
        loading={true}
        icon={"plus"}
        onPress={() => {
          setStoreCount();
        }}
      >
        글로벌증가
      </Button>
    </View>
  );
};

export default Counter;
