import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StatusComponent } from './components/status/status.component';
import { ShowCategoryComponent } from './components/show-category/show-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
    {
    path: 'categories',
    component: CategoriesComponent,
  },
    {
    path: 'status',
    component: StatusComponent,
  },
  {
    path: 'category/:category',
    component: ShowCategoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
