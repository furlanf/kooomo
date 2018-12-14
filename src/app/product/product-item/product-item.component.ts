import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"]
})
export class ProductItemComponent implements OnInit {
  @Input() product: any;
  @Input() options: any;

  colors = [];

  constructor() {}

  ngOnInit() {
    this.pushColors();
  }

  updateImage(color) {
    this.product.images.small = color;
  }

  pushColors() {
    if (this.options && this.options[4] !== null) {
      if (this.options[4].has_image) {
        for (let color of Object.keys(this.options[4].values)) {
          let values = this.options[4].values[color];
          if (values.images) {
            this.colors.push(values.images.small);
          }
        }
      }
    }
  }
}
