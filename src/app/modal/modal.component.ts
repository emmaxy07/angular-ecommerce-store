import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() items: [];
  isOpen = true;
  @Input() count: number;

  // cartItems: [];
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
    this.items = [];
    // this.removeFromCart.emit();
  }

  closeModal() {
    this.isOpen = false;
  }

}
