import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("auth_token"),
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  logout: () => {
    localStorage.removeItem("auth_token");
    document.cookie = "auth_token=; path=/; max-age=0";
    set({ isLoggedIn: false });
  },
}));
