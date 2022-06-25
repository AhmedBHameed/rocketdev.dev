import {joiResolver} from '@hookform/resolvers/joi';
import {useRouter} from 'next/router';
import {useCallback, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';

import {
  Checkbox,
  FormControl,
  InputField,
  PasswordField,
} from '../../components/Forms';

import LoadingButton from '../../components/Buttons/LoadingButton';
import loginSchema from '../../components/Login/loginSchema';
import {LoginInput} from '../../components/Login/models/LoginInput';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {GITHUB_CLIENT_ID} from '../../config/environments';
import ROUTES from '../../config/routes';
import clsx from '../../utils/clsx';
import {GetStaticProps, NextPage} from 'next';
import useGithubLoginHook from '../../components/hooks/githubLoginHook';
import useCreateTokens from '../../components/hooks/createTokensHook';
import useNavigateToDashboard from '../../components/Dashboard/hooks/navigateToDashboardHook';
import RocketDevsSvg from '../../components/SVG/ReactDevsSvg';

const DashboardLogin: NextPage = () => {
  const {goToAdminDashboard} = useNavigateToDashboard();
  const {t, i18n} = useTranslation(['login', 'common']);

  const createTokensQuery = useCreateTokens();

  const githubQuery = useGithubLoginHook();

  const handleLogin = useCallback(async (loginData: LoginInput) => {
    try {
      await createTokensQuery.createTokens({
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
      });
      goToAdminDashboard();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleGithubLogin = useCallback(async (code: string) => {
    try {
      await githubQuery.githubLogin(code);
      goToAdminDashboard();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getGithubCode = useCallback(() => {
    window.open(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user&redirect_uri=${window.location.origin}/dashboard/login`,
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

  const emailError = t(`common:${errors.email?.message}`, {defaultValue: ''});
  const passwordError = t(`common:${errors.password?.message}`, {
    defaultValue: '',
  });

  const loading = createTokensQuery.loading || githubQuery.loading;

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
          <RocketDevsSvg className={clsx('h-20', 'w-20')} />
        </div>

        <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          {t<string>('headTitle')}
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
              loading={loading}
              disabled={loading}
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
                loading
                  ? 'disabled:opacity-50 disabled:cursor-not-allowed bg-gray-600'
                  : 'bg-gray-600 hover:bg-gray-700',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-offset-2',
                'focus:ring-gray-500'
              )}
            >
              {t<string>('githubLogin')}
            </LoadingButton>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
            <FormControl
              label="Email"
              error={emailError}
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
                    placeholder={t('common:emailPlaceholder', {
                      defaultValue: 'Email',
                    })}
                    testId="email-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <FormControl
              label={t('common:passwordLabel', {defaultValue: 'Password'})}
              error={passwordError}
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
                    placeholder={t('common:passwordPlaceholder', {
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
                        label={t<string>('login:rememberMeLabel', {
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
              </div>
            </div>

            <div className={clsx('flex', 'items-center', 'flex-col')}>
              <LoadingButton
                type="submit"
                loading={loading}
                disabled={loading}
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
                  loading
                    ? 'disabled:opacity-50 disabled:cursor-not-allowed bg-gray-600'
                    : 'bg-red-500 hover:bg-red-600',
                  'focus:outline-none',
                  'focus:ring-2',
                  'focus:ring-offset-2',
                  'focus:ring-red-500'
                )}
              >
                {t<string>('login.actionButton', {defaultValue: 'Log in'})}
              </LoadingButton>
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

export default DashboardLogin;
