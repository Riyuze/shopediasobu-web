import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "https://shopediasobu-api.vercel.app/api/",
});

export const apiFetcher = (resource: string) =>
    api.get(resource).then((res) => res.data);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
