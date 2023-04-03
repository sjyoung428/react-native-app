import { AuthAPI } from "@api/auth.api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const useLogin = (
  options?: Omit<UseMutationOptions<any, Error, any, any>, "mutationFn">
) => {
  return useMutation(AuthAPI.signUp, options);
};

export default useLogin;
