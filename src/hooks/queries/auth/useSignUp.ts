import { AuthAPI } from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptionsOf } from "../types";

const useSignUp = (
  options: UseMutationOptionsOf<typeof AuthAPI.signUp> = {}
) => {
  return useMutation(AuthAPI.signUp, options);
};

export default useSignUp;
