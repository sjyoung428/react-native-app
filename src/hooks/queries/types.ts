import type {
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export type UseQueryOptionsOf<
  TAPI extends (args: Parameters<TAPI>[0]) => ReturnType<TAPI>,
  TQueryKey extends (args?: Parameters<TQueryKey>[0]) => QueryKey
> = UseQueryOptions<
  AxiosResponse<TAPI>,
  AxiosError,
  AxiosResponse<TAPI>,
  ReturnType<TQueryKey>
>;

export type UseMutationOptionsOf<
  TAPI extends (args: Parameters<TAPI>[0]) => Promise<ReturnType<TAPI>>
> = UseMutationOptions<
  AxiosResponse<TAPI>,
  AxiosError,
  Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
>;

type a<T> = AxiosRequestConfig<T>;
