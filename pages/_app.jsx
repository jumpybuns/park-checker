import '../styles/globals.css';
import Footer from '../components/Footer.jsx';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import '@fontsource/noto-sans';
import '@fontsource/roboto';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider resetCSS={true} theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
