import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  productId: number = 0;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.productId).subscribe(
      (data) => {
        console.log('Product deleted successfully');
      },
      (error) => {
        console.log('Error deleting product:', error);
      }
    );
  }
}
