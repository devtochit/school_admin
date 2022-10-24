import '../styles/globals.css';
import { Layout } from '../components/Layout';

import { DataContextProvider } from '../Utils/DataContext';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </DataContextProvider>
  );
}

export default MyApp;
