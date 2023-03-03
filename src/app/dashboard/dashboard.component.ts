import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  ProductService: any;
  items = [];
  filteredItems = [];
  cartCount = 0;
  modalOpen = false;
  cartItems: any[];
  searchTerm: string;
  isLoading: boolean = false;
  productSubscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    this.cartCount = parseInt(localStorage.getItem("cartCount")) || 0;

    this.isLoading = true;
   this.productSubscription = this.productService.getItems().subscribe((item: any) => {
    this.items = item;
    this.filteredItems = item;
    this.isLoading = false;
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
  
  onCartCountChange(count: number) {
    this.cartCount = count;
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
