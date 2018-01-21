import { NgModule, ModuleWithProviders } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BloglistComponent } from './bloglist.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

const listRouter: Routes = [
    {
        path: '',
        component: BloglistComponent
    }
];
@NgModule({
  declarations: [BloglistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listRouter)
  ],
  providers: [
    DatePipe
  ],
})
export class BlogListModule {
}
