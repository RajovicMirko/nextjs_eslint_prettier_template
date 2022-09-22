import { QueryKey } from 'react-query';

export enum Urls {
  products = '/products'
}

export type QueryKeyArray = (QueryKey | undefined)[];

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
