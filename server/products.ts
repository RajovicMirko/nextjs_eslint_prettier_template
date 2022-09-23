import { QueryFunction } from 'react-query';
import { generateHttpUrl } from './helpers';
import { Product, ProductsResponse } from '../ts/product';
import { QueryKeyArray, Urls } from '../ts/types';

export const getProducts: QueryFunction<
  ProductsResponse,
  QueryKeyArray
> = async () => {
  const url = generateHttpUrl(Urls.products);

  const response = await fetch(url);
  return await response.json();
};

export const getProduct: QueryFunction<Product, QueryKeyArray> = async ({
  queryKey: [_, id]
}) => {
  if (id) {
    const url = generateHttpUrl(`${Urls.products}/${id}`);

    const response = await fetch(url);
    return await response.json();
  }
};
