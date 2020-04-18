import React from 'react';
import Head from 'next/head';

function Page({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | Patrick Sullivan` : 'Patrick Sullivan'}
        </title>
        <link key="favicon" rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
}

export default Page;
