/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';

import { Layouts } from '../../components/Layout';
import { getProducts } from '../../server/products';
import { Product } from '../../ts/product';
import { ComponentCustom } from '../_app';

export async function getServerSideProps(context: any) {
  const data = await getProducts();
  return { props: { data } };
}

const Products = ({ data }: ComponentCustom) => {
  return (
    <div>
      <h2>Products page</h2>
      <ol>
        {data?.products?.map((product: Product) => (
          <li key={product?.id}>
            <Link href={`products/${product?.id}`}>{product?.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

Products.layout = Layouts.page;

export default Products;
