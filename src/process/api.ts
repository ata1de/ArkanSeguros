import { clearStorage, getStorage } from "@/lib/storage";
import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const TokenInterceptor = (config: any) => {
    const token = getStorage("token");

    if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
    }
    return config;
}

const ErrorInterceptor = (error: AxiosError) => {
    if (error.response?.status === 401) {
        clearStorage();
        window.location.href = "/login";
    }
    return Promise.reject(error?.response?.data || error);
}

api.interceptors.request.use(TokenInterceptor);
api.interceptors.response.use(null, ErrorInterceptor);

export default api;
