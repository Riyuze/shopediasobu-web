import useSWR from "swr";
import api from "./api";
import { CommentRequest } from "../model/comment";

export const getComments = (id: string) => {
    const fetcher = (url: string) => api.get(url).then((res) => res.data.data);
    const { data, isLoading, error } = useSWR(`/comment/${id}`, fetcher);
    return { data, isLoading, error };
};

export const addComment = async (id: string, payload: CommentRequest) => {
    const response = await api.post (`/comment/${id}`, payload)
    return response.data
}


