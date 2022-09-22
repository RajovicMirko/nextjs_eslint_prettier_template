import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          background: 'pink'
        }}
      >
        <div>
          <h1>Test</h1>

          <div style={{ display: 'flex', columnGap: '20px' }}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/car">
              <a>Car</a>
            </Link>
          </div>

          <Component {...pageProps} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;
