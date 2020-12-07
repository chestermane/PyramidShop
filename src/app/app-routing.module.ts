import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  { path: "product/:id", component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
