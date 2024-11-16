import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  logout: () => {
    localStorage.removeItem("auth_token");
    document.cookie = "auth_token=; path=/; max-age=0";
    set({ isLoggedIn: false });
  },
}));

// Initialize isLoggedIn on the client side
if (typeof window !== "undefined") {
  const token = localStorage.getItem("auth_token");
  useAuthStore.setState({ isLoggedIn: !!token });
}
