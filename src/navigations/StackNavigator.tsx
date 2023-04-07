import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/LoginScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
