import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StoreKey } from "../constant";

export interface CustomUserStore {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

export const useCustomUserStore = create<CustomUserStore>()(
  persist(
    (set, get) => ({
      isLogin: false,

      login: () => {
        set(() => ({
          isLogin: true,
        }));
      },
      logout: () => {
        set(() => ({
          isLogin: false,
        }));
      }
    }),
    {
      name: StoreKey.CustomUser,
      version: 1,
    },
  ),
);
