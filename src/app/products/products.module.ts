import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from './../material/material.module';
import { CatesComponent } from './components/cates/cates.component';
import { DialogOverviewExampleDialog } from './components/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    CatesComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
