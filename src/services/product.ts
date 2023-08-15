import useSWR from "swr";
import api from "./api";

export const getProducts = (id: string) => {
    const fetcher = (url: string) => api.get(url).then((res) => res.data.data);
    const { data, isLoading, error } = useSWR(`/product/${id}`, fetcher);
    return { data, isLoading, error };
};


