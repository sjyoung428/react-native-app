import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ImageStore {
  image: string | null;
  setImage: (image: string) => void;
}

export const useAvatarStore = create<ImageStore>()(
  persist(
    (set) => ({
      image: null,
      setImage: (image) => set({ image }),
    }),
    {
      name: "avatar-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
