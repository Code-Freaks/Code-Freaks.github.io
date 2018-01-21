import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogListItem } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs: BlogListItem[] = [];
  isLoaded = false;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
      this.blogService.getBlogList().subscribe(data => {
          console.log(data);
          this.blogs = data;
          this.isLoaded = true;
      });
  }
}
