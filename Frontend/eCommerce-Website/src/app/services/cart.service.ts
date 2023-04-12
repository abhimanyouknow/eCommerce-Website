import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // when we add items to cart, their values will get stored within the 'items' array
  cart = new BehaviorSubject<Cart>({ items: [] });

  // this is to display a message to the user that an item has been successfully added to the cart
  constructor(private _snackBar: MatSnackBar) { }

  // method to update & emit the 'cart' object
  addToCart(item: CartItem): void {
    // variable which acts as a temporary variable to store the existing cart values since we don't 
    // want to alter the original values
    const items = [...this.cart.value.items];

    // variable to check if an item already existed in cart
    const itemInCart = items.find((_item) => _item.id === item.id);

    // if an item already exists in the cart, we just increment the quantity
    if(itemInCart) {
      itemInCart.quantity += 1;
    }
    else {
      items.push(item);
    }

    // we now emit the updated items (in the cart) to whatever method that subscribes to it
    this.cart.next({ items: items });

    // we now display the message on the snackBar
    this._snackBar.open('Item added to cart', 'Dismiss', { duration: 3000 });

    console.log(this.cart.value);
  }

  // method for decreasing the quantity of an item that already exists in the cart
  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;

    let filteredItems = this.cart.value.items.map((_item) => {
      if(_item.id === item.id) {
        _item.quantity--;
        
        if(_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if(itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false); // false is to not display multiple messages to user
    }

    this.cart.next({ items: filteredItems });
    this._snackBar.open('Item removed from Cart', 'Dismiss', {duration: 3000});
  }

  // method for calculating total price of all items in the cart
  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  // method to clear the cart
  clearCart(): void {
    // emit an empty items array
    this.cart.next({ items: [] });
    this._snackBar.open('Cart has been cleared', 'Dismiss', {duration: 3000});
  }

  // method for removing a single item row from cart
  removeFromCart(item: CartItem, notifyFlag = true): Array<CartItem> {
    // we filter out the items that don't match the value as the object passed into the function
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if(notifyFlag) {
      // now we update the cart with those items within the filteredItems variable
      this.cart.next({ items: filteredItems });
      this._snackBar.open('Item(s) removed from Cart', 'Dismiss', {duration: 3000});
    }

    return filteredItems;
  }

}
