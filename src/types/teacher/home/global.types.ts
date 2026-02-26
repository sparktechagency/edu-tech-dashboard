import { IPagination } from "./class.type";

export interface IGlobalResponseTypes<T> {
  success: boolean;
  message: string;
  pagination: IPagination;
  data:T;
}