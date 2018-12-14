import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductItemComponent } from "./product/product-item/product-item.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./product/product.service";

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
