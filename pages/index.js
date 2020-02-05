import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

// import { Container } from './styles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  );
}
