import React from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loader = () => {
  return (
    <View style={styles.loaderStyle}>
      <ActivityIndicator size="large" color="#aaa" />
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});
