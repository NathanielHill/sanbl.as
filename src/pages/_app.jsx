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
    <div className='wrapper'>
      <header>
        <Link href=''>
          <a>Sanbl.as</a>
        </Link>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer />
      <noscript>Turn on JavaScript please.</noscript>
    </div>
    <style jsx>{`
      .wrapper {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
      }
      header {
        background-color: rgb(255, 111, 105);
        min-height: 5em;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      main {
        display: flex;
        flex: 1;
      }
      noscript {
        text-align: center;
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
