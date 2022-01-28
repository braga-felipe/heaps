import '../styles/globals.css';
import { Provider, createClient } from 'urql';

import type { AppProps } from 'next/app';

const client = createClient({ url: 'http://localhost:3000/graphql' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
