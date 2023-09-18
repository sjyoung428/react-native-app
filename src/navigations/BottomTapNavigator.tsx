import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedScreen from "@/screens/FeedScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingScreen from "@/screens/SettingScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import type { BottomTabParamList } from "./types";
import TimerScreen from "@/screens/TimerScreen";

const Tap = createBottomTabNavigator<BottomTabParamList>();

const BottomTapNavigator = () => {
  return (
    <Tap.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tap.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tap.Screen
        name="Timer"
        component={TimerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="timer" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tap.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bone" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tap.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tap.Navigator>
  );
};

export default BottomTapNavigator;
