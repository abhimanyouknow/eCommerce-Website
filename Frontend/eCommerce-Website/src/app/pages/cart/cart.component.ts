import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'Telephone',
    price: 9000,
    quantity: 2,
    id: 1
  }]};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];
  
  constructor() { }

  ngOnInit(): void {
      this.dataSource = this.cart.items;
  }

  // function for calculating total price of all items in the cart
  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

}
