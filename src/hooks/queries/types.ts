import type {
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export type UseQueryOptionsOf<
  TAPI extends (...args: any) => any,
  TQueryKey extends QueryKey = QueryKey
> = UseQueryOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Awaited<ReturnType<TAPI>>,
  TQueryKey
>;

export type UseMutationOptionsOf<TAPI extends (...args: any) => any> =
  UseMutationOptions<
    Awaited<ReturnType<TAPI>>,
    AxiosError,
    Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
  >;
