import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CountdownProps {
  time: number;
  onFinish?: () => void;
  repeat?: boolean;
}

function Countdown({ time, onFinish, repeat = true }: CountdownProps) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(interval);
        if (typeof onFinish === "function") {
          onFinish();
        }
        if (repeat) {
          // repeat가 true인 경우 타이머를 다시 시작
          setRemainingTime(time);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime, onFinish, repeat, time]);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.countdownText}>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  countdownText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Countdown;
