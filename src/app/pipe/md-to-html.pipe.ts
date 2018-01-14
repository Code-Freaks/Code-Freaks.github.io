import { Pipe, PipeTransform } from '@angular/core';
import { BlogService } from '../services/blog.service';
@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private blogService: BlogService){

  }
  transform(value: string): any {
    return this.blogService.markdownToHtml(value);
  }

}
