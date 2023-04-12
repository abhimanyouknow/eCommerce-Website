import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  private _cart: Cart = { items: [] };
  itemsQuantity = 0; // 0 items in the cart by default

  // an @Input() to receive the cart object
  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;
    // to update the quantity badge
    this.itemsQuantity = cart.items
      .map((item) => item.quantity) // transform array of items into an array of only item quantities
      .reduce((prev, current) => prev + current, 0);

  }

  constructor(private cartService: CartService) { }

  // method for calculating total price of all items in the cart (it is defined within the 'cart' Service)
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  // method to clear the cart
  onClearCart() {
    this.cartService.clearCart();
  }
}
