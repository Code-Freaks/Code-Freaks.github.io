import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BlogService } from './services/blog.service';
import { RouterModule, Routes }   from '@angular/router';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { MdToHtmlPipe } from './pipe/md-to-html.pipe';
import { DatePipe } from '@angular/common';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ReadblogComponent } from './components/readblog/readblog.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: BloglistComponent },
  { path: 'read/:title', component: ReadblogComponent},
  { path: '**', redirectTo:'/home' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BloglistComponent,
    MdToHtmlPipe,
    NgbCollapse,
    ReadblogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
	  BlogService,
      DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
