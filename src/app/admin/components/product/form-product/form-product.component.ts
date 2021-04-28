import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from './../../../../core/services/products/products.service';
import { CatesService } from './../../../../core/services/cates/cates.service';
import { Router } from '@angular/router';
import { ImgsService } from './../../../../core/services/imgs/imgs.service';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  productForm: FormGroup;
  public cates: any;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private catesService: CatesService,
    private router: Router,
    private imgsService: ImgsService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.catesService.getCates()
    .subscribe(data => {
      this.cates = data;
      console.log(data);
    });
    }

  private buildForm() {
    this.productForm = this.formBuilder.group({
      cates: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      priceUnitCom: [''],
      priceUnitVen: [''],
      quantity: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      description: [''],
      img: [''],
    });
  }

  addProduct(event: Event){//buena practica
    console.log('activa agragar product');
    event.preventDefault();
    if (this.productForm.valid){
      const datos = {
        cate: this.productForm.value.cates,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        priceUnitCom: this.productForm.value.price / this.productForm.value.quantity,
        priceUnitVen: this.productForm.value.priceUnitVen,
        quantity: this.productForm.value.quantity,
        unit: this.productForm.value.unit,
        description: this.productForm.value.description,
        img: this.productForm.value.img
      };
      /* console.log(datos);
      console.log('esta es la categoria');
      console.log(this.productForm.value.cates); */

      this.productsService.addCate(datos);
      this.router.navigate(['/admin/products']);
    }
  }

  uploadFile(event) {
    const data = this.imgsService.uploadFiles(event, 'products');
    data.task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = data.fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.productForm.get('img').setValue(url);
        });
      })
    ).subscribe();
  }


  get catesField() {
    return this.productForm.get('cates');
  }

  get nameField() {
    return this.productForm.get('name');
  }

  get priceField() {
    return this.productForm.get('price');
  }

  get priceUnitComField() {
    return this.productForm.get('priceUnitCom');
  }

  get priceUnitVenField() {
    return this.productForm.get('priceUnitVen');
  }

  get quantityField() {
    return this.productForm.get('quantity');
  }

  get unitField() {
    return this.productForm.get('unit');
  }

  get descriptionField() {
    return this.productForm.get('description');
  }

  get imgField() {
    return this.productForm.get('img');
  }

}
