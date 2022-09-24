/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Layouts } from '../../components/Layout';
import { Loading } from '../../components/Loading/Loading';
import { getProduct, getProducts } from '../../server/products';
import { QueryKeyArray } from '../../ts/types';
import { ComponentCustom } from '../_app';

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getProducts();

  const paths = products?.map((product: any) => ({
    params: { id: product?.id?.toString() }
  }));

  return {
    paths,
    fallback: false // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getProduct(params?.id as string);

  return {
    props: { data }
  };
};

const ProductDetails = ({ data: product }: ComponentCustom) => {
  const DescriptionItem = ({ label, value }: { label: string; value: any }) => {
    if (!['images', 'thumbnail'].includes(label)) {
      return (
        <li style={{ display: 'flex', columnGap: '10px' }}>
          <span style={{ minWidth: '150px' }}>{label}:</span>
          <p style={{ margin: 0, maxWidth: '500px' }}>{value}</p>
        </li>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '30px'
      }}
    >
      <div>
        <Image
          src={product?.thumbnail as string}
          alt={`product-image-${product?.title}`}
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

ProductDetails.layout = Layouts.subpage;

export default ProductDetails;
