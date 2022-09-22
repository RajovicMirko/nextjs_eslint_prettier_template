import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { QueryProvider } from '../context/queryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryProvider>
  );
}

export default MyApp;
