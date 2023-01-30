import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ProductService } from './../product.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() filteredItems: {title: string, image: string, price: number, }[];
  @Output() addToCart = new EventEmitter<any>();
  searchTerm: string;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

 

}
