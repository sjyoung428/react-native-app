import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return (
    <NavigationContainer>
      <PaperProvider>{children}</PaperProvider>
    </NavigationContainer>
  );
};

export default Provider;
