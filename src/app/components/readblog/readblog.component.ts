import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css']
})
export class ReadblogComponent implements OnInit {
  public content: string;
  constructor( private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
      this.route.paramMap.switchMap(
          params => {
              const title = params.get('title');
              return this.blogService.getBlog(title);
          }
    ).subscribe(data => this.content = data);

   }

}
