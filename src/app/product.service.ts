import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://fakestoreapi.com';

  getItems() {
    return this.http.get(this.baseUrl + '/products')
  }
}
