import type { AppProps } from 'next/app';
import { QueryProvider } from '../context/queryProvider';
import LAYOUT_MAP, { Layouts } from '../components/Layout';
import { FC } from 'react';
import { GlobalStyle, StyleProvider } from '../styles';

export interface ComponentCustom extends FC {
  layout: Layouts;
}
interface AppPropsCustom extends Omit<AppProps, 'Component'> {
  Component: ComponentCustom;
}

function MyApp({ Component, pageProps }: AppPropsCustom) {
  const Layout = LAYOUT_MAP[Component.layout || Layouts.home] as any;

  return (
    <QueryProvider>
      <StyleProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleProvider>
    </QueryProvider>
  );
}

export default MyApp;
