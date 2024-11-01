import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import * as SecureStore from 'expo-secure-store';

import { BASE_URL } from '~/environment';

const baseUrl: string = BASE_URL;

export const API: AxiosInstance = axios.create({ baseURL: baseUrl });

// Sử dụng axios interceptor để thêm accessToken vào header của mỗi request
API.interceptors.request.use(
    async (config: InternalAxiosRequestConfig<unknown>): Promise<InternalAxiosRequestConfig<unknown>> => {
        const accessToken: string | null = await SecureStore.getItemAsync('accessToken');

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error: AxiosError): Promise<never> => {
        return Promise.reject(error);
    }
);
