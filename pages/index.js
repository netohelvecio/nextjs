import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

// import { Container } from './styles';

function Home() {
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

export default withAnalytics()(Home);
