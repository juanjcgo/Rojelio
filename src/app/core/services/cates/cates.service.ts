import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cates } from '../../../models/cates.model';

@Injectable({
  providedIn: 'root'
})
export class CatesService {

  private catesCollection: AngularFirestoreCollection<Cates>;
  private cates: Observable<Cates[]>;

  constructor(private db: AngularFirestore) { 
    this.catesCollection=db.collection<Cates>('cates');
    this.cates = this.catesCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      }
    )); 
  }

  getCates() {
    return  this.catesCollection.snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as Cates;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  addCate(datos) {
    console.log('addCate');
    return this.catesCollection.doc(datos.name).set(datos);
  }

  updateCate(datos, id_old) {
    return this.catesCollection.doc(id_old).update(datos);
  }

  deleteCate(id: string) {
    return this.catesCollection.doc(id).delete();
  }

}
