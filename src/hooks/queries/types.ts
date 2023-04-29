import type {
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";

export type UseQueryOptionsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TAPI extends (...args: any) => any,
  TQueryKey extends (args: Parameters<TQueryKey>[0]) => QueryKey
> = UseQueryOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Awaited<ReturnType<TAPI>>,
  ReturnType<TQueryKey>
>;

export type UseMutationOptionsOf<
  TAPI extends (args: Parameters<TAPI>[0]) => ReturnType<TAPI>
> = UseMutationOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
>;

export type UseInfiniteQueryOptionsOf<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TAPI extends (...args: any) => any,
  TQueryKey extends (args: Parameters<TQueryKey>[0]) => QueryKey
> = UseInfiniteQueryOptions<
  Awaited<ReturnType<TAPI>>,
  Error,
  Awaited<ReturnType<TAPI>>,
  Awaited<ReturnType<TAPI>>,
  ReturnType<TQueryKey>
>;
