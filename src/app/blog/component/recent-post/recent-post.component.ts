import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../../model/blog-post.model';
import { BlogService } from '../../service/blog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recent-post',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.scss'
})
export class RecentPostComponent implements OnInit {

  posts: BlogPost[] | undefined;

  constructor(private service: BlogService) {

  }

  ngOnInit(): void {
    this.service.getRecentPosts().subscribe(response => {
      this.posts = response;
    });
  }

}
