import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CatesComponent } from './components/cates/cates.component';


const routes: Routes = [
    {
        path: '', // Si es hijo se debe dejar vacia
        component: CatesComponent
    },
    {
        path: 'cates/:id',
        component: ProductsComponent
    },
    {
        path: ':id', // Si es para un producto se deja :id
        component: ProductComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {
}
