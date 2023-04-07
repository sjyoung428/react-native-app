import {
  UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export type UseQueryOptionsOf<TAPI extends (...args: any) => any> =
  UseQueryOptions<
    Awaited<ReturnType<TAPI>>,
    AxiosError,
    Awaited<ReturnType<TAPI>>,
    string[]
  >;

export type UseMutationOptionsOf<TAPI extends (...args: any) => any> =
  UseMutationOptions<
    Awaited<ReturnType<TAPI>>,
    AxiosError,
    Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
  >;
