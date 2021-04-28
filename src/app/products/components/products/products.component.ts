import { Component, OnInit } from '@angular/core';
import { Products } from './../../../models/products.model';
import { ProductsService } from './../../../core/services/products/products.service';
import { CatesService } from './../../../core/services/cates/cates.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CartService } from './../../../core/services/cart/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products[];
  cateForm: FormGroup;
  cates: any;
  cate_id: string;
  data: any;
  cateSelect: string;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private catesService: CatesService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadCates();
    this.cate_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadProducts(this.cate_id);
    this.buildForm();
  }

  private buildForm() {
    this.cateForm = this.formBuilder.group({
      cates: ['', [Validators.required]]
    });
  }


  private loadCates() {
    this.catesService.getCates()
    .subscribe(data => {
      this.cates = data;
      /* this.renderProducts(data); */
    });
  }

  private loadProducts(cate) {
    this.productsService.getProducts(cate)
      .subscribe(data => {
      this.products = data;
      this.cateSelect = cate;
    });
  }

  detaillsProduct(prod){
    this.data = {
      cate: prod.cate,
      id: prod.id,
      name: prod.name,
      priceUnitVen: prod.priceUnitVen,
      quantity: prod.quantity,
      unit: prod.unit,
      description: prod.description,
      img: prod.img,
    };
    let navigationExtras: NavigationExtras = {
      state: {
        inf: this.data
      }
    };
    this.router.navigate(['products/detalles'], navigationExtras);
  }

  addCart(prod){
    this.cartService.addCart(prod);
  }
/*   renderProducts(data) {
    if ( data ) {
      console.log('render');
      console.log(data);
      for ( let cate of data ){
        console.log('__________________________________');
        console.log(cate.id);
        this.productsService.getProducts(cate.id)
        .subscribe(data => {
          this.todo = data;
          console.log(this.todo);
        });
       }
    }
  }
 */
}

