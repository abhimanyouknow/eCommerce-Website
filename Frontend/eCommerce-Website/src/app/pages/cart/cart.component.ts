import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

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
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.cart.subscribe((_cart: Cart) => {
        this.cart = _cart;
        this.dataSource = this.cart.items;
      });
  }

  // method for calculating total price of all items in the cart (it is defined within the 'cart' Service)
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  // method to clear all items from cart page
  onClearCart(): void {
    this.cartService.clearCart();
  }

  // method to remove a single row of items from cart page
  onRemoveFromCart(item: CartItem): void{
    this.cartService.removeFromCart(item);
  }

  // method for increasing quantity of item that already exists in the cart
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  // method for decreasing quantity of item that already exsist in the cart
  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

}
