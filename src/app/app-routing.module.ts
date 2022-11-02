import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PostSingleComponent } from './pages/view/post-single/post-single.component';

const routes: Routes = [
  {
    path:'',
    component: PageHomeComponent
  },
  {
    path:'view-post/:id',
    component: PostSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
