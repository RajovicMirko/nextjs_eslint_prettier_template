import { generateHttpUrl } from './helpers';

import { Urls } from '../ts/types';

export const getProducts = async () => {
  const url = generateHttpUrl(Urls.products);
  const response = await fetch(url);
  return await response.json();
};

export const getProduct = async (id: string) => {
  if (id) {
    const url = generateHttpUrl(`${Urls.products}/${id}`);
    const response = await fetch(url);
    return await response.json();
  }
};
