import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@screens/HomeScreen";
import SettingScreen from "@screens/SettingScreen";

const Tap = createBottomTabNavigator();

const Router = () => {
  return (
    <Tap.Navigator>
      <Tap.Screen name="Home" component={HomeScreen} />
      <Tap.Screen name="Setting" component={SettingScreen} />
    </Tap.Navigator>
  );
};

export default Router;
