import { HOUSES_PAGE_SIZE } from '../lib/constants';

import { axiosInstance } from './axiosInstance';

import { Api } from './types';

const api: Api = {
  getHouses: async ({ page, pageSize }) =>
    await axiosInstance.get(`/houses?page=${page}&pageSize=${pageSize || HOUSES_PAGE_SIZE}`),
};

export { api };
