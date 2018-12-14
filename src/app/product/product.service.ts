import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
  BASE_API =
    "http://interviews-env-1.b8amvayt6w.eu-west-1.elasticbeanstalk.com/products";

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get(this.BASE_API);
  }
  public searchProducts(word: string): Observable<any> {
    return this.http.get(this.BASE_API + "?search=" + word);
  }
}
