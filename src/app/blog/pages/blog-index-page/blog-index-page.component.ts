import { Component } from '@angular/core';
import { RecentPostComponent } from '../../component/recent-post/recent-post.component';
import { BlogPost } from '../../model/blog-post.model';
import { PostSummaryComponent } from '../../component/post-summary/post-summary.component';
import { BlogService } from '../../service/blog.service';
import { FlickerComponent } from '../../component/flicker/flicker.component';
import { BlogCategoryComponent } from '../../component/blog-category/blog-category.component';
import { TagListComponent } from '../../component/tag-list/tag-list.component';

@Component({
  selector: 'app-blog-index-page',
  standalone: true,
  imports: [
    PostSummaryComponent,
    FlickerComponent,
    RecentPostComponent,
    BlogCategoryComponent,
    TagListComponent
  ],
  templateUrl: './blog-index-page.component.html',
  styleUrl: './blog-index-page.component.scss'
})
export class BlogIndexPageComponent {

  posts:BlogPost[] = [];
  recentTags:string[] = [];

  currentPage:number  = 1;

  constructor(private service: BlogService) {

  }

  ngOnInit(): void {
    this.currentPage = 1;
    this.refreshPageSelection();
  }
  refreshPageSelection() {
    console.log("Refreshing page selection");
    this.service.getPostsOnPage(this.currentPage).subscribe(postsResponse => {
      this.posts = postsResponse.sort((post1, post2) => {
        return post2.date.localeCompare(post1.date);
      });
    });
  }

}
