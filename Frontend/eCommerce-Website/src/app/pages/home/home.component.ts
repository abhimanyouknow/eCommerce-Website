import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  itemsPerRow = 3;
  category: string | undefined

  constructor() { }

  ngOnInit(): void {
      
  }

  onColumnsCountChange(colsNum: number): void {
    this.itemsPerRow = colsNum;
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
