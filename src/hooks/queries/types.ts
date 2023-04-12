import type {
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type UseQueryOptionsOf<
  TAPI extends (...args: any) => any,
  TQueryKey extends (args: Parameters<TQueryKey>[0]) => QueryKey
> = UseQueryOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Awaited<ReturnType<TAPI>>,
  ReturnType<TQueryKey>
>;

export type UseMutationOptionsOf<
  TAPI extends (args: Parameters<TAPI>[0]) => Promise<ReturnType<TAPI>>
> = UseMutationOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
>;
