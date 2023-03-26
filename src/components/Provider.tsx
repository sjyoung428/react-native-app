import { NavigationContainer } from "@react-navigation/native";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default Provider;
