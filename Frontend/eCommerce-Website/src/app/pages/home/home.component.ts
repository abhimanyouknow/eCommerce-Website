import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  itemsPerRow = 3;

  constructor() { }

  ngOnInit(): void {
      
  }

  onColumnsCountChange(colsNum: number): void {
    this.itemsPerRow = colsNum;
  }
}
