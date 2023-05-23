import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  // baseURL: "http://localhost:8080",
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    let authToken = "";

    const getToken = await AsyncStorage.getItem("authToken");

    if (getToken) {
      authToken = JSON.parse(getToken).state.authToken;
    }

    config.headers.authorization = authToken ? `Bearer ${authToken}` : "";
    return config;
  },
  (error) => Promise.reject(error)
);
