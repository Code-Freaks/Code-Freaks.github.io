import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BlogService } from './services/blog.service';
import { RouterModule, Routes } from '@angular/router';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadblogComponent } from './components/readblog/readblog.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { BlogListModule } from './components/bloglist/bloglist.module';
import { ReadBlogModule } from './components/readblog/readblog.module';
import { SpinnerModule } from './components/spinner/spinner.module';

const routes: Routes = [
  { path: '', loadChildren: 'app/components/bloglist/bloglist.module#BlogListModule' },
  // { path: 'home',  component: SpinnerComponent },
  { path: 'read/:title', loadChildren: 'app/components/readblog/readblog.module#ReadBlogModule'},
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    // SpinnerComponent
  ],
  imports: [
    BrowserModule,
    NgbCollapseModule,
    HttpClientModule,
    BlogListModule,
    ReadBlogModule,
    SpinnerModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [
      BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
