export interface CommentModel {
    _id: string;
    username: string;
    comment: string;
    createdAt: string;
}

export interface CommentRequest {
    username: string;
    comment: string;
}
