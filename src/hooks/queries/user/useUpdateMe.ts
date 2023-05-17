import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptionsOf } from "../types";
import { UserAPI } from "@/api/user.api";

const useUpdateMe = (
  options: UseMutationOptionsOf<typeof UserAPI.updateMe> = {}
) => {
  return useMutation(UserAPI.updateMe, options);
};

export default useUpdateMe;
