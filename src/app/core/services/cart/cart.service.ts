import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Buy, Products } from './../../../models/products.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private buy: Buy[] = [];
  private cart = new BehaviorSubject<Buy[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Products) {
    const id = this.findProduct(product.id);
    console.log('ID');
    console.log(id);
    if (id === -1) {
      console.log('no lo encontro');
      this.registerProduct(product);
      console.log(this.buy);
    }
    else if (this.buy === [] ) {
      console.log('esta vacio');
      this.registerProduct(product);
      console.log(this.buy);
    }
    if (id > -1) {
      this.buy[id].quantity += 1;
      this.buy[id].priceTotal = product.priceUnitVen * this.buy[id].quantity;
      console.log(this.buy);
    }
    this.cart.next(this.buy);
  }


    findProduct(id) {
      console.log('en el for');
      for (let i = 0; i < this.buy.length; i++) {
        console.log(this.buy[i].name);
        if (this.buy[i].id === id) {
          return i;
        }
      }
      return -1;
    }

    registerProduct(product: Products) {
        console.log('No hay nada');
        const buy = {
          id: product.id,
          name: product.name,
          priceUnitVen: product.priceUnitVen,
          priceTotal: product.priceUnitVen,
          quantity: 1,
          unit: product.unit,
          img: product.img
        };
        this.buy = [...this.buy, buy];
        console.log(this.buy);
    }
}


