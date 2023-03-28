import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as PaperProvider } from "react-native-paper";

interface ProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>{children}</PaperProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default Provider;
