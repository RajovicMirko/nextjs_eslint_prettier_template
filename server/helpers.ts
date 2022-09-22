import { Urls } from './types';

const BASE_URL = 'https://dummyjson.com';

export const generateHttpUrl = (url: Urls | string) => `${BASE_URL}${url}`;
