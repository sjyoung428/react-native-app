import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import NotificationScreen from "@screens/NotificationScreen";
import SettingScreen from "@screens/SettingScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tap = createBottomTabNavigator();

const Router = () => {
  return (
    <Tap.Navigator>
      <Tap.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tap.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" color={color} size={size} />
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

export default Router;