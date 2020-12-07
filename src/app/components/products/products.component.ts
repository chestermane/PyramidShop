import { Component, OnInit } from "@angular/core";

import { ProductService } from "../../shared/services/product.service";

import { Products } from "../../shared/models/products.interface";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Products[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: Products[]) => {
      this.products = data;
      console.log(this.products);
    });
  }
}
