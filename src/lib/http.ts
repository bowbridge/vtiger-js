import axios, { AxiosRequestConfig, AxiosError, AxiosInstance } from "axios"
import { VTigerApiError } from "../types"

export const getAxiosInstance = (
  url: string,
  username: string,
  accesskey: string
): AxiosInstance => {
  const API = axios.create()

  const axiosConfig = (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.auth = {
      username,
      password: accesskey,
    }
    return config
  }

  API.defaults.baseURL = url

  API.interceptors.request.use(axiosConfig)

  API.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        const errorData: VTigerApiError = {
          message: error.response.statusText,
          code: error.response.status,
        }
        throw new Error(`${errorData.code} - ${errorData.message}`)
      }
    }
  )

  return API
}
