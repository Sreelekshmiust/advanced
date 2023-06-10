import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductservicesService } from '../services/productservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  product: Product = new Product();
  constructor(private productService: ProductservicesService, private router: Router){

  }
  ngOnInit(): void{

  }
  onSubmit(){
    this.saveProduct();
    console.log(this.product);
  }
  saveProduct(){
    this.productService.saveProduct(this.product)
.subscribe((data)=>{
  console.log(data);
},
  error=>console.log(error));  }
}
