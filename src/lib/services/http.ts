import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';
import { VTIGER_API_ERROR } from '../vtiger-error-response';

export const getAxiosInstance = (
  url: string,
  username: string,
  accesskey: string
): AxiosInstance => {
  const API = axios.create();

  const axiosConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.auth = {
      username,
      password: accesskey,
    };
    return config;
  };

  API.defaults.baseURL = url;

  API.interceptors.request.use(axiosConfig);

  API.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response) {
        throw new VTIGER_API_ERROR(error.response);
      }
    }
  );

  return API;
};
