import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService {

  constructor(private http: HttpClient) { }
  baseUrl="http://localhost:8090/product/api.1.0/"

  saveProduct(product:Product):
  Observable<Object>{
    return this.http.post(`${this.baseUrl}/create`, product);
  }
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/retrieve/${productId}`);
  }

  getProductList(){
    return this.http.get<Product[]>(`${this.baseUrl}/retrieve/all`);
    }
deleteProduct(productId: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/delete/${productId}`)
  }
}
