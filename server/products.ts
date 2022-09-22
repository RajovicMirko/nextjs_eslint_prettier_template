import { QueryFunction, QueryKey } from 'react-query';
import { generateEndpointUrl } from './helpers';
import { Product, ProductsResponse, Urls } from './types';

export const getProducts: QueryFunction<ProductsResponse> = async () => {
  const response = await fetch(generateEndpointUrl(Urls.products));
  return await response.json();
};

export const getProduct: QueryFunction<Product, QueryKey> = async ({
  queryKey: [_, id]
}) => {
  if (id) {
    const response = await fetch(generateEndpointUrl(`${Urls.products}/${id}`));
    return await response.json();
  }
};
