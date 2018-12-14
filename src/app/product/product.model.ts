export class Price {
  sell: number;
  to_discount: number;
  typology: string;
  discount_percentage: string;
  currency: string;
  currency_symbol: string;
}

export class Product {
  id: number;
  code: string;
  name: string;
  url: string;
  price: Price;
  images: [];
  options: [];
  main_options: [];
}
