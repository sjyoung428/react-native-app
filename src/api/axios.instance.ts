import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

// dummyjson 으로 테스트
export const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    const authToken = await AsyncStorage.getItem("authToken");
    config.headers.authorization = authToken ? `Bearer ${authToken}` : "";
    return config;
  },
  (error) => Promise.reject(error)
);

// export const jsonApi = axios.create({
//   baseURL: REACT_APP_JSON_URL,
//   withCredentials: true,
// });
