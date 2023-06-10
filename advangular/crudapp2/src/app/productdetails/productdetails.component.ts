import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductservicesService } from '../services/productservices.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productId: number | any
 product: Product | any
  constructor(private route: ActivatedRoute, private productService: ProductservicesService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];

    this.product = new Product();
    this.productService.getProductById(this.productId).subscribe( data => {
      this.product = data;
    });

}
}