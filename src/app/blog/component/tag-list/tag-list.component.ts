import { Component } from '@angular/core';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss'
})
export class TagListComponent {

  tagList: string[] = [];

  constructor(private service: BlogService) {

  }

  ngOnInit(): void {
    this.service.getRecentTags().subscribe(tags => {
      this.tagList = tags;
    });
  }

}
