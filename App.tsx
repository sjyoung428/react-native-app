import { Provider } from "@components/provider";
import Router from "@routes/Router";

export default function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}
