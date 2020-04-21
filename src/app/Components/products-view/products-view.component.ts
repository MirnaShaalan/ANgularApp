import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  constructor() { }
  displayBasic: boolean = false;
  ngOnInit() {
  }

  showBasicDialog() {
    this.displayBasic = true;
}

}
