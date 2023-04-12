import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit{
  // based on the view, we want the orientation of the product image and text to change
  @Input() fullWidthMode = false; // false by default since dafault view shows 3 items per row
  product: Product | undefined = { // this is a dummy object
    id: 1,
    title: 'Telephone',
    price: 9000,
    category: 'Antiques',
    description: 'An Antique Telephone with a spring loaded dialer',
    image: 'https://via.placeholder.com/150'
  };
  // in order to emit the product, we need to create an event emitter
  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
      
  }

  // function which will emit the product information that we receive from the @Input() declared above
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
