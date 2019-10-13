import { Avatar } from 'components';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default () => (
  <div className='wrapper'>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='Description' content='sanbl.as website' />
      <meta name='theme-color' content='#00162A' />
      <link rel='manifest' href='/manifest.json' />
      <title>Sanbl.as</title>
    </Head>
    <header>
      <Link href=''>
        <a>Sanbl.as</a>
      </Link>
    </header>
    <main>
      <Avatar />
    </main>
    <footer />
    <noscript>Turn on JavaScript please.</noscript>
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
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html,
      body {
        width: 100vw;
        height: 100vh;
        overscroll-behavior: contain;
        font-size: 2vmin;
        font-family: Verdana, Geneva, sans-serif;
      }
      body {
        background-color: rgb(108, 143, 177);
        background-image: linear-gradient(-25deg, rgb(255, 204, 92), rgb(255, 238, 173));
      }
    `}</style>
  </div>
);
