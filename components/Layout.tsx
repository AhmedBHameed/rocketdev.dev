import React, {ReactNode} from 'react';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import {includes} from 'lodash';
import {useRouter} from 'next/router';
import {ROUTES} from '../config/routes';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({children, title = 'This is the default title'}: Props) => {
  const router = useRouter();

  const showNavbar = !includes(router.asPath, ROUTES.login.path);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {showNavbar && <Navbar />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </>
  );
};

export default Layout;
