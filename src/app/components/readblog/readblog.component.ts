import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css']
})
export class ReadblogComponent implements OnInit {
  public title:String;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => this.title = params.get('title'))
   }

}
