import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "http://localhost:8080/api",
});

export const apiFetcher = (resource: string) =>
    api.get(resource).then((res) => res.data);

// api.interceptors.request.use(
//     (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error: AxiosError): Promise<AxiosError> => {
//         return Promise.reject(error);
//     }
// );

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
