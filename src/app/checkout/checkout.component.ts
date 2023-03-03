import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() items: any[];
  totalPrice: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.items = JSON.parse(params.items);
      this.totalPrice = this.calculateTotal();
    })
  }

  calculateTotal() {
  const params = new URLSearchParams(window.location.search);
  const items = params.get('items');
  const itemsArray = JSON.parse(items);
  let total = 0;
  
  if (this.items && this.items.length) {
    for (let item of this.items) {
      console.log(item.quantity)
      const quantity = item.quantity ? item.quantity : 1;
      total += item.price * quantity;
    }
  }
  
  if (itemsArray && itemsArray.length) {
    for (let item of itemsArray) {
      total += item.price;
    }
  }
  
  return total;
}
}
