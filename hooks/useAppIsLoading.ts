import Router from 'next/router';
import { useEffect, useState } from 'react';

export const useAppIsLoading = () => {
  const [isAppLoading, setIsAppLoading] = useState(false);

  useEffect(() => {
    const routeEventStart = () => setIsAppLoading(true);
    const routeEventEnd = () => setIsAppLoading(false);

    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);
    return () => {
      Router.events.off('routeChangeStart', routeEventStart);
      Router.events.off('routeChangeComplete', routeEventEnd);
      Router.events.off('routeChangeError', routeEventEnd);
    };
  }, []);

  return { isAppLoading };
};
