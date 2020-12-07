import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartComponent } from "./components/cart/cart.component";
import { LeftMenuComponent } from "./components/left-menu/left-menu.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductComponent,
    NavbarComponent,
    CartComponent,
    LeftMenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
