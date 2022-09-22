import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Urls } from '../../server/types';

function Layout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'pink',
        padding: '30px 0 0 30px'
      }}
    >
      <h1 style={{ marginTop: 0 }}>Test</h1>

      <div style={{ display: 'flex', columnGap: '20px' }}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href={Urls.products}>
          <a>Products</a>
        </Link>
      </div>

      {children}
    </div>
  );
}

export default Layout;
