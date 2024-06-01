import { Component, Input } from '@angular/core';
import { BlogPost } from '../../model/blog-post.model';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-summary',
  standalone: true,
  imports: [
    DatePipe,
    RouterModule
  ],
  templateUrl: './post-summary.component.html',
  styleUrl: './post-summary.component.scss'
})
export class PostSummaryComponent {

  @Input() post:BlogPost;

}
