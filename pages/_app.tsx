import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
// import { appWithTranslation } from 'next-i18next';
// import nextI18NextConfig from '../next-i18next.config.js';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { En, Vi } from '../translation';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, locales, push } = router;
  const t: any = locale === 'en' ? En : Vi;
  return (
    <>
      <Layout>
        <Component {...pageProps} t={t} />
      </Layout>
    </>
  );
}
export default App;
