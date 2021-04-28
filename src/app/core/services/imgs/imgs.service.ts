import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgsService {


  constructor(
    private storage: AngularFireStorage,
  ) { }

  uploadFiles(event, tipe) {
    const file = event.target.files[0];
    console.log(file.name);
    const name = file.name;
    const dir = 'images/' + tipe + '/' + name;
    console.log(dir);
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    const data = {
      fileRef: fileRef,
      task: task
    };
    return data;
  }

}
