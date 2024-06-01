export interface BlogPostDetail {
    postId: string;
    title: string;
    date: string;
    author: string;
    synopsis: string;
    featureImage?: string;
    detail: string;
    tags: string[]
    comments: Comment[];
}

export interface Comment {
    commentId: string;
    date: string;
    author: string;
    comment: string;
}