import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getProduct } from '../../server/products';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useQuery(['product', id], getProduct, {
    retry: false
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Id: {id}</div>
      <div>{JSON.stringify(product)}</div>
    </>
  );
};

export default ProductDetails;
