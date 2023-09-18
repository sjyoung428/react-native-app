import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptionsOf } from "../types";
import { UserAPI } from "@/api/user.api";

const useUploadAvatar = (
  options: UseMutationOptionsOf<typeof UserAPI.uploadAvatar> = {}
) => {
  return useMutation(UserAPI.uploadAvatar, options);
};

export default useUploadAvatar;
