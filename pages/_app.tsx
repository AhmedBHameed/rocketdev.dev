import '../styles/globals.css';
import {ThemeProvider} from 'next-themes';
import {AppProps} from 'next/app';
import {ApolloProvider} from '@apollo/client';
import apolloClient from '../utils/apolloClient';
import {appWithTranslation} from 'next-i18next';
import ToastMessage from '../components/ToastMessage/ToastMessage';
import '../public/vendor/ReactToastify.min.css';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        <ToastMessage />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
