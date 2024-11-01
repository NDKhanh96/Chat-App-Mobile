import axios, { type AxiosInstance } from 'axios';
import { BASE_URL } from '~/environment';

const baseUrl: string = BASE_URL;

export const API: AxiosInstance = axios.create({ baseURL: baseUrl });
