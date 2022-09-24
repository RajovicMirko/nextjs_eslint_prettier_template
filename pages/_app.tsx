import type { AppProps } from 'next/app';
import { QueryProvider } from '../context/queryProvider';
import LAYOUT_MAP, { Layouts } from '../components/Layout';
import { FC } from 'react';
import { GlobalStyle, StyleProvider } from '../styles';
import { useAppIsLoading } from '../hooks/useAppIsLoading';
import { Loading } from '../components/Loading/Loading';

export interface ComponentCustom extends FC {
  data?: any;
  layout?: Layouts;
}

interface AppPropsCustom extends Omit<AppProps, 'Component'> {
  Component: ComponentCustom;
}

function MyApp({ Component, pageProps }: AppPropsCustom) {
  const { isAppLoading } = useAppIsLoading();
  const Layout = LAYOUT_MAP[Component.layout || Layouts.home] as any;

  return (
    <QueryProvider>
      <StyleProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {isAppLoading && <Loading />}
      </StyleProvider>
    </QueryProvider>
  );
}

export default MyApp;
