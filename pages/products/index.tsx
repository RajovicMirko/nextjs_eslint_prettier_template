import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getProducts } from '../../server/products';
import { Product } from '../../server/types';

const Products: NextPage = () => {
  const { data, isLoading } = useQuery(['products'], getProducts, {
    retry: false
  });

  if (isLoading) return <div>Loading...</div>;

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

export default Products;
