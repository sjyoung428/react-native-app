import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface AuthTokenStore {
  authToken: string | null;
  setAuthToken: (authToken: string) => void;
  removeAuthToken: () => void;
}

export const useAuthTokenStore = create<AuthTokenStore>((set) => ({
  authToken: null,
  setAuthToken: async (authToken) => {
    set({ authToken });
    await AsyncStorage.setItem("authToken", authToken);
  },
  removeAuthToken: async () => {
    set({ authToken: null });
    await AsyncStorage.removeItem("authToken");
  },
}));
