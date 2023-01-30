import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ProductService: any;
  items = [];
  filteredItems = [];
  cartCount = 0;
  modalOpen = false;
  cartItems: any[];
  searchTerm: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    this.cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

    this.productService.getItems().subscribe((item: any) => {
      this.items = item;
      this.filteredItems = item;
    })
  }

  addToCart(item: any) {
    let findItem = this.cartItems.find(i => {
      return i.id === item.id
    })
    if (findItem) { findItem.quantity++; } else {
      this.cartItems.push(Object.assign({}, item, { quantity: 1 }));
    }
    this.cartCount++;
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    localStorage.setItem("cartCount", this.cartCount.toString());
  }

  removeFromCart() {
    
  }
  

  openModal() {
    this.modalOpen = !this.modalOpen;
  }

   searchItems() {
    if (!this.searchItems) {
      return this.filteredItems;
    } else {
      return this.filteredItems = this.items.filter(item =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()));  
    }
  }

}
