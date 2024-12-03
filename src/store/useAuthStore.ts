import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logout: () => void;
  name: string;
  setName: (value: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  name: "",
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  logout: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_name");
    document.cookie = "auth_token=; path=/; max-age=0";
    set({ isLoggedIn: false, name: "" });
  },
  setName: (value) => {
    localStorage.setItem("user_name", value);
    set({ name: value });
  },
}));

// Initialize isLoggedIn on the client side
if (typeof window !== "undefined") {
  const token = localStorage.getItem("auth_token");
  const userName = localStorage.getItem("user_name") || "";
  useAuthStore.setState({ isLoggedIn: !!token, name: userName });
}
