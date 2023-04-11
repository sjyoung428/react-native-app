import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export type UseQueryOptionsOf<
  TAPI extends (...args: any) => ReturnType<TAPI>,
  TQueryKey extends QueryKey = QueryKey
> = UseQueryOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Awaited<ReturnType<TAPI>>,
  TQueryKey
>;

export type UseMutationOptionsOf<
  TAPI extends (...args: any) => Promise<ReturnType<TAPI>> // any 어떻게 지우지;;
> = UseMutationOptions<
  Awaited<ReturnType<TAPI>>,
  AxiosError,
  Parameters<TAPI>[0] extends undefined ? void : Parameters<TAPI>[0]
>;
