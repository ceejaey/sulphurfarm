import { Injectable } from '@angular/core';
import { MockService } from '../../service/mock.service';
import { Observable, map } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { BlogPostDetail } from '../model/blog-post-detail.model';
import { BlogSearchFilter } from '../model/blog-search-filter.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getDetail(postId: string): Observable<BlogPostDetail | null> {
    return this.getAllPosts().pipe(map(responses => {
      let detail: BlogPostDetail;
      for (let post of responses) {
        if (postId == post.postId) {
          return post;
        }
      }
      return null;
    }));
  }

  postsPerPage = new BlogSearchFilter().limit;

  constructor(private mock: MockService) { }

  private getAllPosts():Observable<BlogPostDetail[]> {
    return this.mock.getAsset<BlogPostDetail[]>('blog/blog-index')
  }

  search(filter: BlogSearchFilter): Observable<BlogPost[]> {
    return this.getAllPosts().pipe(map(posts => {
      let summaries:BlogPost[] = [];
      for (let p of posts) {
        let matches = true;
        matches = matches && summaries.length < filter.limit;
        if (matches) {
          summaries.push(this.toSummary(p));
        }
      }
      return summaries;
    }));
  }

  getPostsOnPage(currentPage: number): Observable<BlogPost[]> {
    let filter = new BlogSearchFilter();
    filter.offset = filter.limit * currentPage;
    return this.search(filter);
  }

  getRecentPosts(): Observable<BlogPost[]> {
    let filter = new BlogSearchFilter();
    filter.offset = 0;
    filter.limit = 3;
    return this.search(filter);
  }

toSummary(post: BlogPostDetail): BlogPost {
  return {
    author: post.author,
    date: post.date,
    postId: post.postId,
    synopsis: post.synopsis,
    title: post.title,
    featureImage: post.featureImage,
    commentCount: post.comments.length,
    tags: post.tags
  } as BlogPost;
}

  getRecentTags(): Observable<string[]> {
    return this.getAllPosts().pipe(map(posts => {
      posts = posts.sort((post1, post2) => {
        return post2.date.localeCompare(post1.date);
      });
      let tags:string[] = [];
      for (let p of posts) {
        for (let t of p.tags) {
          if (!(t in tags)) {
            tags.push(t)
          }
        }
      }
      tags = tags.slice(0, 5)
      return tags.sort((s1, s2)=>{
        return s1.localeCompare(s2);
      });
    }))
  }

}