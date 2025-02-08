import { clearStorage, getStorage } from "@/lib/storage";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const api = axios.create({
    baseURL: "http://localhost:3333",
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
        redirect("/login");
    }
    return Promise.reject(error?.response?.data || error);
}

api.interceptors.request.use(TokenInterceptor);
api.interceptors.response.use(null, ErrorInterceptor);

export default api;
