import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "@screens/AuthScreen";
import React from "react";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
