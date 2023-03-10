import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  item: any;
  id: number;
  @Input() cartCount: number;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.getItemsById(id).subscribe(item => {
      this.item = item;
    })
  }

  addToCart(item: any) {
    console.log("added to cart", item);
  }

}
