import { AuthAPI } from "@api/auth.api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { UseMutationOptionsOf } from "../types";

const useSignUp = (
  options: UseMutationOptionsOf<typeof AuthAPI.signUp> = {}
) => {
  return useMutation(AuthAPI.signUp, options);
};

export default useSignUp;
