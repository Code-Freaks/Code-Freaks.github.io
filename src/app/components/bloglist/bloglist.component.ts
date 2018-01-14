import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog.interface';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  blogs:Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
      // this.blogService.getBlog().then(res => this.blogs = res)
      this.blogService.getBlogList().then(data => {
          console.log(data)
          this.blogs = data;
      });
  }
}
