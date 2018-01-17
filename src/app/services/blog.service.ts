import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import * as marked from 'marked';
import { BlogListItem } from '../interfaces/blog.interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {
  private base_url: String;
  constructor(private http: HttpClient) {
      this.base_url = environment.BASE_URL;
  }

  getBlogList(): Observable<BlogListItem[]> {
     return this.http.get(this.base_url + 'blog-data.json')
  }
  getBlog(link: string){
      link = link.replace('-', '/')
      return this.http.get(this.base_url + link + '.md', {responseType: 'text'})
  }
  markdownToHtml(md: string) {
      return marked(md);
  }
}
