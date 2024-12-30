export type ApiError = {
  message: string;
  code?: string | number;
  details?: any;
};

export type ApiResponse<T = any> = {
  data: T | null;
  error: ApiError | null;
};

export type ApiCallOptions = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
};

export type ApiResponseFromServer<T> =
  | { success: true; data: T; meta?: Meta; message?: string }
  | { success: false; data?: never; meta?: never; message: string };

export type Meta = {
  page: number;
  itemsPerPage: number;
  totalItems?: number;
  totalPages?: number;
  q?: string;
};
