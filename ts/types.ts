import { QueryKey } from 'react-query';

export enum Urls {
  products = '/products'
}

export type QueryKeyArray = (QueryKey | undefined)[];
