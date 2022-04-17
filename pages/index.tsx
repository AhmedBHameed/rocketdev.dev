import Link from 'next/link';
import Layout from '../components/Layout';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import useVerifyMe from '../components/hooks/verifyMeHook';

const IndexPage = () => {
  const {userProfile, error} = useVerifyMe();

  return (
    <Layout>
      <h1 className="bg-red-600">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
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

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, ['navbar']);

  return {
    props: {
      ...translations,
    },
  };
};

export default IndexPage;
