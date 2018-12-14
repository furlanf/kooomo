import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "./product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent implements OnInit {
  products: Product = new Product();
  constructor(private productService: ProductService) {}
  error: any = false;
  loading: boolean = true;
  searchProduct = "";
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
        this.loading = false;
      },
      error => {
        this.error = true;
      }
    );
  }

  search(word: string) {
    this.loading = true;
    this.searchProduct = word;
    if (this.hasCache(word)) {
      this.loading = false;
      this.products = this.getCache(word);
    } else {
      this.searchProducts(word);
    }
  }

  hasCache(word) {
    return this.getCache(word);
  }

  getCache(word) {
    if (localStorage.getItem(word)) {
      return JSON.parse(localStorage.getItem(word));
    }
    return false;
  }

  searchProducts(word: string) {
    this.productService.searchProducts(word).subscribe(
      response => {
        localStorage.setItem(word, JSON.stringify(response));
        this.products = response;
        this.loading = false;
      },
      error => {
        this.error = true;
        this.loading = false;
      }
    );
  }
}
