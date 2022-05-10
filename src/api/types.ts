import { AxiosResponse } from 'axios';

export interface Api {
  getHouses: (options: ApiGetHousesOptions) => ApiReturn<ApiGetHousesReturn>;
}

export type ApiReturn<T> = Promise<AxiosResponse<T>>;

export type ApiGetHousesOptions = {
  page: number;
  pageSize?: number;
};

export type ApiGetHouseReturn = {
  url: string;
  name: string;
};

export type ApiGetHousesReturn = ApiGetHouseReturn[];
