import Layout from '../components/Layout';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import useVerifyMe from '../components/hooks/verifyMeHook';
import RocketLauncherSvg from '../components/SVG/RocketLauncherSvg/RocketLauncherSvg';
import clsx from '../utils/clsx';
import theme from '../styles/theme';

const IndexPage = () => {
  const {userProfile, error} = useVerifyMe();

  return (
    <Layout>
      <main>
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  {/* <a
                    href="#"
                    className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                      We're hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a> */}
                  <h1
                    className={clsx(
                      'mt-4',
                      'text-4xl',
                      'tracking-tight',
                      'font-extrabold',
                      'sm:mt-5',
                      'sm:text-6xl',
                      'lg:mt-6',
                      'xl:text-6xl',
                      theme.text
                    )}
                  >
                    <span className="block">A better way to be a</span>
                    <span className="block text-indigo-400">Rocket Dev</span>
                  </h1>
                  <p className="mt-3 text-base sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Learn how to speak computer languages and build your web
                    apps. By slow learning carve, we assure you gaining more
                    information and skills.
                  </p>
                  {/* <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our{' '}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div> */}
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}

                  <RocketLauncherSvg />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
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
