import axios from 'axios';

import { API_URL } from '../lib/constants';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export { axiosInstance };
