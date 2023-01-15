import axios, { AxiosResponse, AxiosError } from 'axios';
import { BASE_URL, HTTP_API_TIMEOUT } from './http.config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: HTTP_API_TIMEOUT,
});

const handleSuccess = (response: AxiosResponse) => response.data;
const handleError = (error: AxiosError) => error;

/**
 * @description {Method to get data from the server}
 * @param url {String}
 * @returns Promise<unknown>
 */
const getRequest = (url: string): Promise<unknown> => {
  return axiosInstance.get(url).then(handleSuccess).catch(handleError);
};

/**
 * @description {Method to post data to the server}
 * @param url {String}
 * @param payload {unknown}
 * @returns Promise<unknown>
 */
const postRequest = (url: string, payload: unknown): Promise<unknown> => {
  return axiosInstance.post(url, payload).then(handleSuccess).catch(handleError);
};

/**
 * @description {Method to put data to the server}
 * @param url {String}
 * @param payload {unknown}
 * @returns Promise<unknown>
 */
const putRequest = (url: string, payload: unknown): Promise<unknown> => {
  return axiosInstance.put(url, payload).then(handleSuccess).catch(handleError);
};

/**
 * @description {Method to delete data from the server}
 * @param url {String}
 * @returns Promise<unknown>
 */
const deleteRequest = (url: string): Promise<unknown> => {
  return axiosInstance.delete(url).then(handleSuccess).catch(handleError);
};

export { getRequest, postRequest, putRequest, deleteRequest };
