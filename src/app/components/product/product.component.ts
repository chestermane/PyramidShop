import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../shared/services/product.service";
import { Products } from "../../shared/models/products.interface";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  id: number;
  product: Products;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params["id"]);

    this.productsService.getProduct(this.id).subscribe((data: Products) => {
      this.product = data;
      console.log(this.product);
    });
  }
}
