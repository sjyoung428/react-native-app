import { catApi } from "../api/cat";
import GlobalStyles from "@utils/GlobalStyles";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const SettingScreen = () => {
  const [cat, setCat] = useState("");
  console.log(cat);

  useEffect(() => {
    catApi.getCat().then((res) => {
      setCat(res.data[0]);
    });
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <Text>Setting Screen</Text>
      <Text>{cat}</Text>
    </View>
  );
};

export default SettingScreen;
