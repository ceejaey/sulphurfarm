import { Component } from '@angular/core';
import { BlogPostDetail } from '../../model/blog-post-detail.model';
import { BlogService } from '../../service/blog.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DatePipe, JsonPipe } from '@angular/common';
import { BlogCategoryComponent } from '../../component/blog-category/blog-category.component';
import { RecentPostComponent } from '../../component/recent-post/recent-post.component';
import { TagListComponent } from '../../component/tag-list/tag-list.component';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [
    RouterModule,
    JsonPipe,
    DatePipe,

    BlogCategoryComponent,
    RecentPostComponent,
    TagListComponent
  ],
  templateUrl: './blog-detail-page.component.html',
  styleUrl: './blog-detail-page.component.scss'
})
export class BlogDetailPageComponent {

  post?: BlogPostDetail | null;

  constructor(
    private route: ActivatedRoute,
    private service: BlogService) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log("Params: ",  params);
      let postId: string | null = params.get('postId');
      if (postId != null) {
        this.loadPage(postId);
      } else {
        console.log("Subscription has no post detail", postId, params);
      }
    });

    let postId = this.route.snapshot.paramMap.get('postId');
    if (postId != null) {
      this.loadPage(postId);
    } else {
      console.log("No post detail!");
    }


  }

  loadPage(postId: string): void {
    this.service.getDetail(postId).subscribe(response => {
      console.log("Loaded: ", response);
      this.post = response;
    });
  }

}
