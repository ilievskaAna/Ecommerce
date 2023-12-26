import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header [cart]="cart"></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})

export class AppComponent implements OnInit{
  cart: Cart = {items: []};

  constructor (private CartService: CartService){

  }

  ngOnInit() {
    this.CartService.cart.subscribe((_cart) =>{
      this.cart = _cart;
    });
  }
}
