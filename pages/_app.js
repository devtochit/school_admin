import '../styles/globals.css';
import { Layout } from '../components/Layout';

import { DataContextProvider } from '../Utils/DataContext';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
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
