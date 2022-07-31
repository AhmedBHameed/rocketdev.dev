import {joiResolver} from '@hookform/resolvers/joi';
import {useRouter} from 'next/router';
import {useCallback, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';

import {
  Checkbox,
  FormControl,
  InputField,
  PasswordField,
} from '../components/Forms';

import loginSchema from '../components/Login/loginSchema';
import {LoginInput} from '../components/Login/models/LoginInput';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import RocketDevSvg from '../components/SVG/LogoSvg';
import {GITHUB_CLIENT_ID} from '../config/environments';
import ROUTES from '../config/routes';
import clsx from '../utils/clsx';
import {GetStaticProps, NextPage} from 'next';
import Link from 'next/link';
import useGithubLoginHook from '../components/hooks/githubLoginHook';
import useCreateTokens from '../components/hooks/createTokensHook';
import LoadingButton from '../components/Buttons/LoadingButton';

const Login: NextPage = () => {
  const router = useRouter();
  const {t, i18n} = useTranslation(['common', 'login']);

  const createTokensQuery = useCreateTokens();

  const githubQuery = useGithubLoginHook();

  const handleLogin = useCallback(async (loginData: LoginInput) => {
    try {
      await createTokensQuery.createTokens({
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
      });
      router.push(ROUTES.latest.path, undefined, {
        locale: i18n.language,
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleGithubLogin = useCallback(async (code: string) => {
    try {
      await githubQuery.githubLogin(code);
      router.push(ROUTES.latest.path);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getGithubCode = useCallback(() => {
    window.open(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user&redirect_uri=${window.location.origin}/login`,
      '_self'
    );
  }, []);

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: joiResolver(loginSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  useEffect(() => {
    if (window) {
      const githubCode = window.location.search.split('code=')[1];

      if (githubCode) {
        handleGithubLogin(githubCode);
      }
    }
  }, []);

  const currentLocale = i18n.language;

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const disabled = createTokensQuery.loading || githubQuery.loading;

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'items-center',
        'h-full',
        'justify-center',
        'py-12',
        'sm:px-6',
        'lg:px-8'
      )}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className={clsx('flex', 'justify-center')}>
          <RocketDevSvg className={clsx('h-20', 'w-20')} />
        </div>

        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {t('headTitle', {ns: 'login', defaultValue: 'Login'})}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className={clsx(
            'dark:bg-zinc-700',
            'bg-zinc-600',
            'py-8',
            'px-4',
            'shadow',
            'sm:rounded-lg',
            'sm:px-10'
          )}
        >
          <div className="mb-10">
            <LoadingButton
              type="submit"
              loading={githubQuery.loading}
              disabled={disabled}
              icon={<i className="mr-5 ri-github-fill ri-2x"></i>}
              onClick={getGithubCode}
              className={clsx(
                'w-full',
                'flex',
                'justify-center',
                'py-2',
                'px-4',
                'border',
                'border-transparent',
                'rounded-md',
                'shadow-sm',
                'text-sm',
                'font-medium',
                'text-white',
                githubQuery.loading
                  ? 'disabled:opacity-50 disabled:cursor-not-allowed bg-gray-600'
                  : 'bg-gray-600 hover:bg-gray-700',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-offset-2',
                'focus:ring-gray-500'
              )}
            >
              {t('githubLogin', {
                ns: 'login',
                defaultValue: 'Log in with Github',
              })}
            </LoadingButton>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
            <FormControl
              label="Email"
              error={t(emailError)}
              // hideErrorPlaceholder?: boolean;
              htmlFor="email"
              helperTextId="email"
            >
              <Controller
                control={control}
                name="email"
                render={({field: {value, onChange}}) => (
                  <InputField
                    id="email"
                    ariaLabel="email"
                    error={!!emailError}
                    name="email"
                    onChange={onChange}
                    placeholder={t('emailPlaceholder', {
                      ns: 'common',
                      defaultValue: 'Email',
                    })}
                    testId="email-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <FormControl
              label={t('passwordLabel', {
                ns: 'common',
                defaultValue: 'Password',
              })}
              error={t(passwordError)}
              // hideErrorPlaceholder?: boolean;
              htmlFor="password"
              helperTextId="password"
            >
              <Controller
                control={control}
                name="password"
                render={({field: {value, onChange}}) => (
                  <PasswordField
                    id="password"
                    ariaLabel="password"
                    error={!!passwordError}
                    name="password"
                    onChange={onChange}
                    placeholder={t('passwordPlaceholder', {
                      ns: 'common',
                      defaultValue: 'Password',
                    })}
                    testId="password-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <div>
              <div
                className={clsx(
                  'mt-7',
                  'flex',
                  'items-center',
                  'justify-between'
                )}
              >
                <FormControl hideErrorPlaceholder>
                  <Controller
                    control={control}
                    name="rememberMe"
                    render={({field: {value, onChange}}) => (
                      <Checkbox
                        id="remember_me"
                        value={value}
                        labelClassName="text-gray-50 mx-3"
                        label={t('rememberMeLabel', {
                          ns: 'login',
                          defaultValue: 'Remember me',
                        })}
                        ariaLabel="remember me"
                        testId="remember-me-checkbox"
                        onChange={onChange}
                        name="remember-me"
                      />
                    )}
                  />
                </FormControl>

                <div className="text-sm">
                  <Link
                    href={ROUTES.forgotPassword.path}
                    locale={currentLocale}
                  >
                    <a className="font-medium text-red-500 hover:text-red-400">
                      {t('forgotPassword', {
                        ns: 'login',
                        defaultValue: 'Forgot password?',
                      })}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className={clsx('flex', 'items-center', 'flex-col')}>
              <LoadingButton
                type="submit"
                loading={createTokensQuery.loading}
                disabled={disabled}
                className={clsx(
                  'w-full',
                  'flex',
                  'justify-center',
                  'py-2',
                  'px-4',
                  'border',
                  'border-transparent',
                  'rounded-md',
                  'shadow-sm',
                  'text-sm',
                  'font-medium',
                  'text-white',
                  createTokensQuery.loading
                    ? 'disabled:opacity-50 disabled:cursor-not-allowed bg-gray-600'
                    : 'bg-red-500 hover:bg-red-600',
                  'focus:outline-none',
                  'focus:ring-2',
                  'focus:ring-offset-2',
                  'focus:ring-red-500'
                )}
              >
                Login
              </LoadingButton>

              <Link href={ROUTES.signup.path} locale={currentLocale}>
                <a
                  className={clsx(
                    'font-medium',
                    'text-red-500',
                    'hover:text-red-400',
                    'mt-2'
                  )}
                >
                  {t('youDontHaveAccount', {
                    ns: 'login',
                    defaultValue: "You don't have account?",
                  })}
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'login',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default Login;
