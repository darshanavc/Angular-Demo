import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products =[
    {
      id:1,
      name:"product1",
      price:2000,
      description:"Product1 details",
    },
    {
      id:2,
      name:"product2",
      price:2000,
      description:"Product2 details",
    },
  ]
  constructor() { }

  ngOnInit(): void {
    
  }

}
