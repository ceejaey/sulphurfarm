export interface BlogPost {
    postId: string;
    title: string;
    date: string;
    author: string;
    synopsis: string;
    featureImage?: string;
    commentCount: number;
    tags: string[];
}
