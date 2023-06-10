import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductservicesService } from '../services/productservices.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent  implements OnInit{
  productId: number = 0;
  constructor(private productService: ProductservicesService){}

  ngOnInit(): void {
  
  }

  deleteProduct(productId:number): void {
    this.productService.deleteProduct(productId).subscribe(
      (data) => {
        console.log('Product deleted successfully');
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );
  }
  
}