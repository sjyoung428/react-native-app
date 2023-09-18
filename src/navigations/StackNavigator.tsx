import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import type { RootStackParamList } from "./types";
import AuthScreen from "@/screens/AuthScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        options={{
          headerShown: false,
        }}
        component={AuthScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
