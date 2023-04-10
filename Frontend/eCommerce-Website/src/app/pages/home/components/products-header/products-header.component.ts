import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit{
  @Output() columnsCount = new EventEmitter<number>();
  sort = 'Latest Arrivals';
  itemsCount = 12;

  constructor() { }

  ngOnInit(): void {
      
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemsCountUpdate(count: number): void {
    this.itemsCount = count;
  }

  onViewUpdate(colsNum: number): void {
    this.columnsCount.emit(colsNum)
  }
}
