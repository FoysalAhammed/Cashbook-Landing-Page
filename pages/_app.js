import { ChakraProvider } from '@chakra-ui/react';
// import { Provider } from 'react-redux';
// import { PersistGate } from "redux-persist/integration/react";
// import store, { persistor } from '../store/store';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <div>
        <ChakraProvider>
        <Head>
        <link rel="icon" href="/logo.png" sizes="any" />
        </Head>
        <Component {...pageProps} />
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      </ChakraProvider>
  </div>
}
export default MyApp
