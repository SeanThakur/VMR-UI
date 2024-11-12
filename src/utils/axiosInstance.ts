import { useAuthStore } from "@/store/useAuthStore";
import axios from "axios";
import { useRouter } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: "https://www.marketresearchandnews.com/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("auth_token");
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const router = useRouter();
    if (error.response && error.response.status === 401) {
      const { setLoggedIn } = useAuthStore.getState();
      setLoggedIn(false);
      router.push("/");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
