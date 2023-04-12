import { AuthAPI } from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { UseMutationOptionsOf } from "../types";

const useLogin = (options: UseMutationOptionsOf<typeof AuthAPI.login> = {}) => {
  return useMutation(AuthAPI.login, options);
};

export default useLogin;
