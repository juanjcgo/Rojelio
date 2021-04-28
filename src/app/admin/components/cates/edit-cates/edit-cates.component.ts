import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cates }  from './../../../../models/cates.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatesService } from './../../../../core/services/cates/cates.service';
import { ImgsService } from './../../../../core/services/imgs/imgs.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-edit-cates',
  templateUrl: './edit-cates.component.html',
  styleUrls: ['./edit-cates.component.scss']
})
export class EditCatesComponent implements OnInit {

  public cate: Cates;
  public catesForm: FormGroup;
  image$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private catesService: CatesService,
    private imgsService: ImgsService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cate = this.router.getCurrentNavigation().extras.state.cate;
        console.log('constructor');
        console.log(this.cate);
      }
    });
    this.buildForm();
   }

  ngOnInit() {
    if ( this.cate ) {
      this.catesForm.patchValue(this.cate);
    }
  }

  private buildForm() {
    this.catesForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: [''],
    });
  }

  updateCate(event: Event){ //buena practica
    event.preventDefault();
    if (this.catesForm.valid){
      const datos = {
        name: this.catesForm.value.name,
        description: this.catesForm.value.description,
        img: this.catesForm.value.img
      };
      console.log(datos);
      this.catesService.updateCate(datos, this.cate.id);
      this.router.navigate(['/admin/cates']);
    }
  }

  uploadFile(event) {
    const data = this.imgsService.uploadFiles(event, 'cates');
    data.task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = data.fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.catesForm.get('img').setValue(url);
        });
      })
    ).subscribe();
  }

  get nameField() {
    return this.catesForm.get('name');
  }

  get descriptionField() {
    return this.catesForm.get('description');
  }
}