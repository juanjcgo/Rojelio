import { Component, OnInit, Inject } from '@angular/core';
import { Buy, Products } from './../../../models/products.model';
import { ProductsService } from './../../../core/services/products/products.service';
import { CatesService } from './../../../core/services/cates/cates.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CartService } from './../../../core/services/cart/cart.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './../../../models/buy.models';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Products[];
  com: any[];
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
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    /* this.renderBuyButton(); */
    this.loadCates();
    this.cate_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadProducts(this.cate_id);
    this.buildForm();
  }

  openDialog(prod) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: prod.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result !== false && result.quantity !== '' && result.unit !== '') {
          const data: Buy = {
            id: prod.id,
            img: prod.img,
            name: prod.name,
            priceUnitVen: prod.priceUnitVen,
            priceTotal: prod.priceUnitVen *  result.quantity,
            quantity:  result.quantity,
            unit:  result.unit,
          };
          this.addCart(data);
      }
    });
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

@Component({
  selector: 'app-dialog',
  templateUrl: 'products.component-dialog.html',
})
export class DialogOverviewExampleDialog {

  buyForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Buy) {
      /* this.buyForm = this.buildForm(); */
      this.buildForm();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private buildForm() {
    this.buyForm = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required])
   });
  }


}

