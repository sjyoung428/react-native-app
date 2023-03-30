import { AuthAPI } from "@api/auth.api";
import {
  UseMutateFunction,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";

const useLogin = (
  options?: Omit<UseMutationOptions<any, Error, any, any>, "mutationFn">
) => {
  return useMutation(AuthAPI.login, options);
};

export default useLogin;
