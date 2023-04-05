import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthTokenStore {
  authToken: string | null;
  actions: {
    setAuthToken: (authToken: string) => void;
    removeAuthToken: () => void;
  };
}

export const useAuthTokenStore = create<AuthTokenStore>()(
  persist(
    (set) => ({
      authToken: null,
      actions: {
        setAuthToken: (authToken: string) => set({ authToken }),
        removeAuthToken: () => set({ authToken: null }),
      },
    }),
    {
      name: "authToken",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
