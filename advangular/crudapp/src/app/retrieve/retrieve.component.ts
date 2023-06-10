import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit{
constructor(private Productservice:ProductService){}
products:Product[]=[];
productId: number = 0;
selectedProduct:Product | undefined;

  ngOnInit(): void {
    this.products=this.getProducts();
  }
getProducts():any{
  this.Productservice.getProducts().subscribe((products)=>{
  this.products=products;
});
} 

deleteProduct(productId:number): void {
  this.Productservice.deleteProduct(productId).subscribe(
    (data) => {
      console.log('Product deleted successfully');
    },
    (error) => {
      console.log('Error deleting product:', error);
    }
  );
}

selectProduct(product:Product) : void {
  this.selectedProduct = { ...product};
}
saveUpdatedProduct(): void {
  if (this.selectedProduct) {
    this.Productservice.updateProduct(this.selectedProduct).subscribe(() => {
     // this.getProducts();
      this.selectedProduct = undefined;
    });
  }
 }
}
