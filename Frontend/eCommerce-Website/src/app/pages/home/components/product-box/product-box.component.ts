import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit{
  // based on the view, we want the orientation of the product image and text to change
  @Input() fullWidthMode = false; // false by default since dafault view shows 3 items per row
  constructor() { }

  ngOnInit(): void {
      
  }
}
