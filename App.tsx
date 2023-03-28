import { Provider } from "@components/provider";
import BottomTapNavigator from "@navigations/BottomTapNavigator";

export default function App() {
  return (
    <Provider>
      <BottomTapNavigator />
    </Provider>
  );
}
