import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadblogComponent } from './readblog.component';
import { BlogService } from '../../services/blog.service';
import { MdToHtmlPipe } from '../../pipe/md-to-html.pipe';
import { Router, Routes, RouterModule } from '@angular/router';
import { SpinnerModule } from '../spinner/spinner.module';
const readblogRouter: Routes = [
    {
        path: '',
        component: ReadblogComponent
    }
];
@NgModule({
  imports: [
      CommonModule,
      SpinnerModule,
      RouterModule.forChild(readblogRouter)
    ],
  declarations: [
    ReadblogComponent,
    MdToHtmlPipe,
  ],
  exports: [ReadblogComponent]
})
export class ReadBlogModule {
}
