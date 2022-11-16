'use client';
import "../styles/globals.css";
import React from 'react';
import {
  RecoilRoot
} from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilRoot>
      <html>
        <head />
        <body>
          <div className='bg-black overflow-x-hidden m-0 p-0'>
            {children}
          </div>
        </body>
      </html>
    </RecoilRoot>
  )
}
