import "../styles/globals.css";
import React from 'react';
import Head from 'next/head'
import {
  RecoilRoot
} from 'recoil';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Twitch Squad</title>
      </Head>
      <div className='bg-background overflow-x-hidden m-0 p-0'>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </div>
    </div>
    
  )
}
