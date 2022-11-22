import "../styles/globals.css";
import React from 'react';
import {
  RecoilRoot
} from 'recoil';

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-black overflow-x-hidden m-0 p-0'>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )
}