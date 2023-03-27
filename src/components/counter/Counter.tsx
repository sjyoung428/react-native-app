import { useCounterStore } from "@store/useCounterStore";
import React from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const { increment: setStoreCount } = useCounterStore();

  return (
    <View>
      <Text>{count}</Text>
      <Button
        title="로컬증가"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title="글로벌증가"
        onPress={() => {
          setStoreCount();
        }}
      />
    </View>
  );
};

export default Counter;
