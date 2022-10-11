import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";

function MyApp({ 
  Component,
  pageProps: { session, ...pageProps },
  
}) {

  return (
    <>
    <SessionProvider session={pageProps.session} >
        <ThemeProvider enableSystem={true} attribute="class">
              <Layout>
                  <Component {...pageProps} />
              </Layout>
        </ThemeProvider>
    </SessionProvider>
    </>
  );
}

export default MyApp;