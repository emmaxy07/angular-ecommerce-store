import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() count: number;
  @Output() openModal = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onOpenModal() {
    this.openModal.emit();
  }
}
