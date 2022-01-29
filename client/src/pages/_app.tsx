import '../styles/globals.css';
import { Provider } from 'urql';
import { client } from '../urqlClient';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </ReduxProvider>
  );
}

export default MyApp;
