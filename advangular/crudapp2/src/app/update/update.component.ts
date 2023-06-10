import { Component } from '@angular/core';
import { ProductservicesService } from '../services/productservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productId: number = 0;
  product: any;
  

  constructor(private productService: ProductservicesService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }


  saveUpdatedProduct(): void {
    if(this.product){
    this.productService.saveProduct(this.product).subscribe(
      (response) => {
        console.log('Product updated successfully');
        this.goToProductList();
      
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
    }
  }

  goToProductList(){
    this.router.navigate(['/Products']);
  }
}
