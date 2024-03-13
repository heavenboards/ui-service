// src/api/api.ts
import axios from "axios";
import type { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://89.223.68.162:8092/api/v1/auth',
});

export default apiClient;
