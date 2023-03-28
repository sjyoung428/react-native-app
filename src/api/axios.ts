import axios from "axios";
import { DUMMY_API_BASE_URL } from "@env";

// dummyjson 으로 테스트
export const api = axios.create({
  baseURL: DUMMY_API_BASE_URL, // https://dummyjson.com/
});
