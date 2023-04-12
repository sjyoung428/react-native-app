import type {
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export type UseQueryOptionsOf<
  TAPI extends (args: Parameters<TAPI>[0]) => ReturnType<TAPI>,
  TQueryKey extends QueryKey = QueryKey
> = UseQueryOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Awaited<ReturnType<TAPI>>,
  TQueryKey
>;

export type UseMutationOptionsOf<
  TAPI extends (args: Parameters<TAPI>[0]) => Promise<ReturnType<TAPI>>
> = UseMutationOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
>;
