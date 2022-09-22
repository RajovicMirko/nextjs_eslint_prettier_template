import { QueryFunction, QueryKey } from 'react-query';
import { Urls } from './url';

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

export const getProducts: QueryFunction<ProductsResponse> = async () => {
  const response = await fetch(Urls.products);
  return await response.json();
};

export const getProduct: QueryFunction<Product, QueryKey> = async ({
  queryKey: [_, id]
}) => {
  if (id) {
    const response = await fetch(`${Urls.products}/${id}`);
    return await response.json();
  }
};
