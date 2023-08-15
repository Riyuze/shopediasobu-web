import { getComments, addComment } from "../services/comment";
import { CommentModel, CommentRequest } from "../model/comment";
import { TextField, Button, Alert, Snackbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { convertDateToString } from "../utils/time";
import { useSWRConfig } from "swr";

const Comments = ({ id }: { id: string }) => {
    const { data, isLoading, error } = getComments(id || "");
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [open, setOpen] = useState(false);

    const bottomRef = useRef<null | HTMLDivElement>(null);

    const { mutate } = useSWRConfig();

    const handleSubmit = async () => {
        if (username.length === 0 || comment.length === 0) {
            setOpen(true);
        } else {
            const payload: CommentRequest = {
                username: username,
                comment: comment,
            };
            await addComment(id, payload);
            mutate(`/comment/${id}`);
        }
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [data]);

    return (
        <>
            <div className="w-full h-[70%] border rounded-2xl mt-4 px-2 overflow-auto scroll">
                {data &&
                    data.map((comment: CommentModel) => {
                        return (
                            <div className="w-full border rounded-2xl p-2 text-start my-2">
                                <p className="text-sm">{comment.comment}</p>
                                <p className="text-xs text-gray-500 font-bold">
                                    {comment.username}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {convertDateToString(comment.createdAt)}
                                </p>
                            </div>
                        );
                    })}
                <div ref={bottomRef} />
            </div>
            <div className="w-full mt-4 flex">
                <div className="mr-2">
                    <div className="mb-2">
                        <TextField
                            label="Username"
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={(val) => setUsername(val.target.value)}
                            value={username}
                        />
                    </div>
                    <TextField
                        label="Comment"
                        variant="outlined"
                        size="small"
                        fullWidth
                        onChange={(val) => setComment(val.target.value)}
                        value={comment}
                    />
                </div>
                <Button
                    variant="contained"
                    onClick={() => {
                        setUsername("");
                        setComment("");
                        handleSubmit();
                    }}
                >
                    Submit
                </Button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    Username and Comment must be filled!
                </Alert>
            </Snackbar>
        </>
    );
};

export default Comments;
