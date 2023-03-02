import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() items: any[];
  isOpen = true;
  @Input() count: number;
  @Output() cartCountChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  increase(item: any) {
    item.quantity++
  }

  decrease(item: any) {
    if (item.quantity > 1 || item.quantity == 0) {
      item.quantity--;
    }
  }

  goToCheckout() {
    this.router.navigate(['checkout'], {
      queryParams: { items: JSON.stringify(this.items) }
    });
  }

  removeFromCart() {
    this.items = [];
    this.count = 0;

    localStorage.setItem("cartItems", JSON.stringify([]));
    localStorage.setItem("cartCount", this.count.toString());
  }

  clearCart() {
    let cartItems = [];
    let cartCount = 0;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", cartCount.toString());
    this.items = cartItems;
    this.cartCountChange.emit(0);
    this.closeModal();  }

  closeModal() {
    this.isOpen = false;
  }

}
