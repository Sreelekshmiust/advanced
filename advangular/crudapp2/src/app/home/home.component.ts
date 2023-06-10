import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductservicesService } from '../services/productservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] | undefined;

  constructor(private productService: ProductservicesService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(){
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    });
  }

  ProductDetails(productId: number){
    this.router.navigate(['Productdetails', productId]);
  }

  updateProduct(productId: number){
    this.router.navigate(['update-product', productId]);
  }
  deleteProduct(productId: number){
    this.productService.deleteProduct(productId).subscribe( data => {
      console.log(data);
      this.getProduct();
    })
  }
}
  


