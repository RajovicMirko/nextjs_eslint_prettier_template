import Image from 'next/image';
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

  const DescriptionItem = ({ label, value }: { label: string; value: any }) => {
    if (!['images', 'thumbnail'].includes(label)) {
      return (
        <li style={{ display: 'flex', columnGap: '10px' }}>
          <span style={{ minWidth: '150px' }}>{label}:</span>
          <span style={{ whiteSpace: 'pre-wrap' }}>{value}</span>
        </li>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30px'
      }}
    >
      <div>
        <Image
          src={product?.thumbnail as string}
          alt="product-image"
          width={400}
          height={300}
        />
        <ul
          style={{
            display: 'flex',
            flexFlow: 'column',
            rowGap: '5px',
            padding: 0
          }}
        >
          {Object.entries(product || {}).map(([key, value]) => (
            <DescriptionItem key={key} label={key} value={value} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
