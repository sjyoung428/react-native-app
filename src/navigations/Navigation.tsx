import { useAuthTokenStore } from "@/store/useAuthTokenStore";
import BottomTapNavigator from "./BottomTapNavigator";
import StackNavigator from "./StackNavigator";

const Navigation = () => {
  const { authToken: isLogin } = useAuthTokenStore();

  return <>{isLogin ? <BottomTapNavigator /> : <StackNavigator />}</>;
};

export default Navigation;
