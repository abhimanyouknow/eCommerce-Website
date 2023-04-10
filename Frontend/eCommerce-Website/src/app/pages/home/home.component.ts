import { Component, OnInit } from '@angular/core';

// define an object for row height; this should adjust dynamically as per the selected view
const ROW_HEIGHT: { [id:number]: number} = { 1: 400, 3: 335 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  itemsPerRow = 3; // default set to 3 items per row
  rowHeight = ROW_HEIGHT[this.itemsPerRow];
  category: string | undefined

  constructor() { }

  ngOnInit(): void {
      
  }

  // this function is to change the view; changes the number of items shown per row
  onColumnsCountChange(colsNum: number): void {
    this.itemsPerRow = colsNum;
    this.rowHeight = ROW_HEIGHT[this.itemsPerRow];
  }

  // this function is used to change the category / filter based on what is selected from the side panel
  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
