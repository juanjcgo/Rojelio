import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatesComponent } from './components/cates/view-cates/cates.component';
import { FormCatesComponent } from './components/cates/form-cates/form-cates.component';
import { FormProductComponent } from './components/product/form-product/form-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditCatesComponent } from './components/cates/edit-cates/edit-cates.component';




@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    CatesComponent,
    FormCatesComponent,
    FormProductComponent,
    ViewProductComponent,
    EditProductComponent,
    EditCatesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ]
})
export class AdminModule { }
