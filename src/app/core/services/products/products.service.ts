import { Injectable } from '@angular/core';
import { Products } from '../../../models/products.model';
import { Cates } from '../../../models/cates.model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Products[] = [];
  private catesCollection: AngularFirestoreCollection<Cates>;
  private cates: Observable<Cates[]>;

  constructor(private db: AngularFirestore) {
    this.catesCollection = db.collection<Cates>('cates');
    this.cates = this.catesCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data };
        });
      }
    ));
  }

  getAllCatesProducts() {
    return  this.cates;
  }

 /*  getAllCatesProducts() {
    return  this.catesCollection.snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  } */

  getProducts(cate){
    return  this.catesCollection.doc(cate).collection('products').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a => {
        const data = a.payload.doc.data() as Products;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getOneProducts(cate, prod) {
    return  this.catesCollection.doc(cate).collection('products').doc(prod).snapshotChanges();
  }

  updateProduct(datos, ids_old) {
    return this.catesCollection.doc(ids_old.cate_id).collection('products').doc(ids_old.prod_id).update(datos);
  }

  addCate(datos) {
    return this.catesCollection.doc(datos.cate).collection('products').doc(datos.name).set(datos);
  }

  deleteProduct(ids) {
    return this.catesCollection.doc(ids.cate_id).collection('products').doc(ids.prod_id).delete();
  }


  // getAllProducts() {
  //   return this.products;
  // }

  // getProduct(id: string){
  //   return this.products.find(item => id === item.id);
  // }
}
