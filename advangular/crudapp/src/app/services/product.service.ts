import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="http://localhost:8090/product/api.1.0/"
  
  constructor(private http: HttpClient) {

   }
  getProducts(){
  return this.http.get<Product[]>("http://localhost:8090/product/api.1.0/retrieve/all");
  }
  saveProduct(product:Product):
  Observable<Object>{
    return this.http.post("http://localhost:8090/product/api.1.0/create",product);
  }
 
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8090/product/api.1.0/retrieve/${id}`);
  }

  // updateProduct(product: Product): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/update/${product.productId}`, product);
  // }
  updateProduct(product: Product): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, product);
  }

  deleteProduct(productId: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/delete/${productId}`)
  }
}
