import Link from 'next/link';

import React from 'react';
import Layout from '../../../components/Layout';

const Post = () => {
  return (
    <Layout>
      <h1 className="bg-red-600">Hello Next.js 👋</h1>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      {/* <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="bg-red-600">Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout> */}
    </Layout>
  );
};

export default Post;
