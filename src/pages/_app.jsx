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
      <header className='flex flex-row items-center w-screen'>
        <Link href=''>
          <a>Sanbl.as</a>
        </Link>
      </header>
      <main className='flex flex-1'>
        <Component {...pageProps} />
      </main>
      <footer />
      <noscript className='text-center'>Turn on JavaScript please.</noscript>
    </div>
    <style jsx>{`
      header {
        background-color: rgb(255, 111, 105);
        min-height: 5em;
      }

      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: inherit;
        font-size: 1.5rem;
        outline: 0;
        padding: 1em;
        text-decoration: none;
      }
    `}</style>
  </>
);

export default App;
