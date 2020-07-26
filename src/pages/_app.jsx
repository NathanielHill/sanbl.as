import Head from 'next/head';
import Link from 'next/link';

import './_app.css';

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='Description' content='sanbl.as website' />
      <meta name='theme-color' content='#00162A' />
      <link rel='manifest' href='/manifest.json' />
      <title>Sanbl.as</title>
    </Head>
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <header className='flex flex-row items-center w-screen h-20 bg-brand-red'>
        <Link href=''>
          <a className='no-underline p-4 text-2xl outline-none'>Sanbl.as</a>
        </Link>
      </header>
      <main className='flex flex-1'>
        <Component {...pageProps} />
      </main>
      <footer />
      <noscript className='text-center'>Turn on JavaScript please.</noscript>
    </div>
  </>
);

export default App;
