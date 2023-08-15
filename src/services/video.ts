import useSWR from "swr";
import api from "./api";

export const getVideos = () => {
    const fetcher = (url: string) => api.get(url).then((res) => res.data.data);
    const { data, isLoading, error } = useSWR("/video", fetcher);
    return { data, isLoading, error };
};

export const getVideo = (id: string) => {
    const fetcher = (url: string) => api.get(url).then((res) => res.data.data);
    const { data, isLoading, error } = useSWR(`/video/${id}`, fetcher);
    return { data, isLoading, error };
};
