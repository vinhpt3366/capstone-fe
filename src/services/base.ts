import { BASE_URL, TIMEOUT, TOKEN_CYBERSOFT } from '@/common/common.constant';
import { getAuthToken, resetAuth } from '@/pages/auth/AuthForms/store';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const apiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    tokencybersoft: TOKEN_CYBERSOFT
  }
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      resetAuth();
    }
    return Promise.reject(error);
  }
);

export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiInstance.get(url, config).then((res) => res.data),

  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> =>
    apiInstance.post(url, data, config).then((res) => res.data)
};

export default api;
