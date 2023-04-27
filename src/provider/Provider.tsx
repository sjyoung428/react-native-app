import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as PaperProvider } from "react-native-paper";
import { ToastProvider } from "react-native-toast-notifications";

interface ProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <PaperProvider>{children}</PaperProvider>
        </ToastProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default Provider;
