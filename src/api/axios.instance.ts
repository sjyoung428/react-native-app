import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

// dummyjson 으로 테스트
export const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  withCredentials: true,
});
