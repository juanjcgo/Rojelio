import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { CatesService } from './services/cates/cates.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    CatesService
  ]
})
export class CoreModule { }
