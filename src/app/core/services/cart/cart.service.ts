import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Buy, Products } from './../../../models/products.model';
import { DialogData } from './../../../models/buy.models';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private buy: Buy[] = [];
  private cart = new BehaviorSubject<Buy[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(buy: Buy) {
    const id = this.findProduct(buy.id);
    console.log('ID');
    console.log(id);
    if (id === -1 || this.buy === []) {
      console.log('no lo encontro');
      this.registerProduct(buy);
      console.log(this.buy);
    }
    else if (id > -1) {
      this.buy[id].quantity = buy.quantity;
      this.buy[id].priceTotal = buy.priceTotal;
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

    registerProduct(buy: Buy) {
        this.buy = [...this.buy, buy];
        console.log(this.buy);
    }
}


