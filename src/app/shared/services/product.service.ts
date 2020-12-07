import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Products } from "../models/products.interface";
import { Observable } from "rxjs";
import { map, find, filter } from "rxjs/operators";

const PRODUCTS_API: string = "http://localhost:3000/products";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Products[]> {
    return this.http.get(PRODUCTS_API).pipe(
      map((response: Products[]) => {
        return response;
      })
    );
  }

  getProduct(id: number): Observable<Products> {
    return this.http.get(PRODUCTS_API).pipe(
      map((product: Products[]) => {
        return product.find((product: Products) => {
          return product.id === id;
        });
      })
    );
  }
}
