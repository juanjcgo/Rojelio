import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../../core/services/products/products.service';
import { CatesService } from './../../../../core/services/cates/cates.service';
import { Products } from './../../../../models/products.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  products: Products[];
  cates: any;
  cateForm: FormGroup;
  displayedColumns = ['img', 'name', 'priceUnitVen', 'quantity', 'actions'];
  product: Products;

  constructor(
    private productsService: ProductsService,
    private catesService: CatesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.catesService.getCates()
    .subscribe(data => {
      this.cates = data;
    });
  }

  findProductByCate(cate) {
    this.productsService.getProducts(cate)
    .subscribe(data => {
      this.products = data;
      console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,');
      console.log(this.products);
      console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,');
    });
  }

  private buildForm() {
    this.cateForm = this.formBuilder.group({
      cates: ['', [Validators.required]]
    });
  }

  updateProduct(products){
    console.log('=======================');
    console.log(products);
    console.log('=======================');
    this.product = {
        cate: products.cate,
        id: products.id,
        name: products.name,
        price: products.price,
        priceUnitCom: products.priceUnitCom,
        priceUnitVen: products.priceUnitVen,
        quantity: products.quantity,
        unit: products.unit,
        description: products.description,
        img: products.img
      };
    console.log('Este es el id de la view ' + products.id);
    let navigationExtras: NavigationExtras = {
      state: {
        prod: this.product
      }
    };
    this.router.navigate(['admin/edit-product'], navigationExtras);
  }

  deleteProduct(product) {
    const ids = {
      cate_id: product.cate,
      prod_id: product.id
    };
    console.log('Estos son las claves', ids);
    this.productsService.deleteProduct(ids);
  }

}
