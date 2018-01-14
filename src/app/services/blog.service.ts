import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import * as marked from 'marked';
import { Blog } from '../interfaces/blog.interface';


const CONFIG = {
  space: 'orvhbzl1crn3',
  accessToken: '96628992213cb165c36333c10446c965868a0edf2dc022b0781c4a73df505ea0',

  contentTypeIds: {
    product: 'lesson'
  }
}

@Injectable()
export class BlogService {
  private cdaClient = contentful.createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });
  constructor() { }

  getBlog(query?: object){
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query)).then(res => res.items)
  }

  getBlogList():Promise<Blog[]>{
     return new Promise(function(resolve, reject){
         let data: Blog[] = []
         data.push({'title':'python baby steps', 'date':'2017-12-31T17:32:14.412Z'})
         data.push({'title':'tensorflow install', 'date':'2017-11-01T12:30:11.412Z'})
         data.push({'title':'angular advanced', 'date':'2018-01-05T18:10:41.412Z'})

         resolve( data );
     })
  }
  markdownToHtml(md: string){
      return marked(md);
  }
}
