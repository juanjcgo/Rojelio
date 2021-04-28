import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from '../admin/components/nav/nav.component';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { CatesComponent } from '../admin/components/cates/view-cates/cates.component';
import { FormCatesComponent } from '../admin/components/cates/form-cates/form-cates.component';
import { FormProductComponent } from './../admin/components/product/form-product/form-product.component';
import { ViewProductComponent } from './../admin/components/product/view-product/view-product.component';
import { EditProductComponent } from './../admin/components/product/edit-product/edit-product.component';
import { EditCatesComponent } from './components/cates/edit-cates/edit-cates.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'products',
        component: ViewProductComponent
      },
      {
        path: 'create-product',
        component: FormProductComponent
      },
      {
        path: 'edit-product',
        component: EditProductComponent
      },
      {
        path: 'cates',
        component: CatesComponent
      },
      {
        path: 'create-cate',
        component: FormCatesComponent
      },
      {
        path: 'edit-cate',
        component: EditCatesComponent
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
