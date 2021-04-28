import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from './../../../../core/services/products/products.service';
import { CatesService } from './../../../../core/services/cates/cates.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Products } from 'src/app/models/products.model';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ImgsService } from './../../../../core/services/imgs/imgs.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public productForm: FormGroup;
  public cates: any;
  public id: string;
  public product: Products;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private catesService: CatesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private imgsService: ImgsService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.product = this.router.getCurrentNavigation().extras.state.prod;
        console.log('constructor');
        console.log(this.product);
      }
    });
    this.buildForm();
  }

  ngOnInit(){
    if ( this.product ) {
      this.productForm.patchValue(this.product);
      this.loadCates();
    }
  }

  loadCates() {
    this.catesService.getCates()
    .subscribe(data => {
      this.cates = data;
      console.log(data);
    });
  }

  private buildForm() {
    this.productForm = this.formBuilder.group({
      cate: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      priceUnitCom: ['', [Validators.required]],
      priceUnitVen: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: ['', [Validators.required]],
    });
  }

  updateProduct(event: Event){
    event.preventDefault();
    if (this.productForm.valid){
      const ids_old = {
        cate_id: this.product.cate,
        prod_id: this.product.id
      };
      const datos = {
        cate: this.productForm.value.cate,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        priceUnitCom: this.productForm.value.price / this.productForm.value.quantity,
        priceUnitVen: this.productForm.value.priceUnitVen,
        quantity: this.productForm.value.quantity,
        unit: this.productForm.value.unit,
        description: this.productForm.value.description,
        img: this.productForm.value.img
      };
      this.productsService.updateProduct(datos, ids_old);
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
    return this.productForm.get('cate');
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
