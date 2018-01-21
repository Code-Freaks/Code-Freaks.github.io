import { NgModule, ModuleWithProviders } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BloglistComponent } from './bloglist.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
import { SpinnerModule } from '../spinner/spinner.module';

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
    SpinnerModule,
    RouterModule.forChild(listRouter)
  ],
  providers: [
    DatePipe
  ],
})
export class BlogListModule {
}
