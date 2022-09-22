import { NextPage } from 'next';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getProducts, Product } from '../../server/products';

const Car: NextPage = () => {
  const { data, isLoading } = useQuery(['products'], getProducts, {
    retry: false
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Car page</h2>
      <ol>
        {data?.products?.map((product: Product) => (
          <li key={product?.id}>
            <Link href={`car/${product?.id}`}>{product?.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Car;
