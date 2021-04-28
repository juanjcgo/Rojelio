import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatesService } from './../../../../core/services/cates/cates.service';
import { ImgsService } from './../../../../core/services/imgs/imgs.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-cates',
  templateUrl: './form-cates.component.html',
  styleUrls: ['./form-cates.component.scss']
})
export class FormCatesComponent implements OnInit {

  catesForm: FormGroup;
  image$: Observable<any>;

  constructor(
    private catesServices: CatesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private imgsService: ImgsService
  ) {
    this.buildForm();
    /* this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    }); */
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.catesForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: [''],
    });
  }

  addCate(event: Event){ //buena practica
    event.preventDefault();
    if (this.catesForm.valid){
      const datos = {
        name: this.catesForm.value.name,
        description: this.catesForm.value.description,
        img: this.catesForm.value.img
      };
      this.catesServices.addCate(datos);
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






/*   uploadFiles(event) {
    const file = event.target.files[0];
    console.log(file.name);
    const name = file.name;
    const dir = 'images/cates/' + name;
    console.log(dir);
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.catesForm.get('img').setValue(url);
        });
      })
    )
    .subscribe();
  } */

}
