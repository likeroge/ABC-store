export interface ICart {
  products: IProduct[];
  totalPrice: number;
}

export interface IPrice {
  currency: string;
  value: number;
}

type color = "red" | "green" | "blue" | "";

export interface IProduct {
  type: string;
  id: number;
  sku: string;
  regular_price: IPrice;
  image: string;
  brand: number;
  title: string;
  colors?: color[];
  selected_color?: string;
}

export interface IBrand {
  id: number;
  sort: string;
  title: string;
  code: string;
}
