import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthTokenStore } from "@store/useAuthTokenStore";
import React, { useEffect, useState } from "react";
import BottomTapNavigator from "./BottomTapNavigator";
import StackNavigator from "./StackNavigator";

const Navigation = () => {
  const { authToken } = useAuthTokenStore();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (authToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [authToken]);

  return <>{isLogin ? <BottomTapNavigator /> : <StackNavigator />}</>;
};

export default Navigation;
