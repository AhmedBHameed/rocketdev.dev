import {joiResolver} from '@hookform/resolvers/joi';

import {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';

import {FormControl, InputField, PasswordField} from '../components/Forms';

import {useTranslation} from 'next-i18next';
import RocketDevsSvg from '../components/SVG/ReactDevsSvg';
import clsx from '../utils/clsx';
import Link from 'next/link';
import {SignupInput, useSignupMutation} from '../graphql/generated/graphql';
import {useRouter} from 'next/router';
import {ROUTES} from '../config/routes';
import signupSchema from '../components/Signup/signupSchema';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import LoadingButton from '../components/Buttons/LoadingButton';

const Signup = () => {
  const signupTrans = useTranslation('signup');
  // const commonTrans = useTranslation('common');

  const router = useRouter();
  const commonLocale = useTranslation('common');
  const [signup, {loading}] = useSignupMutation();

  const handleLogin = useCallback(async (data: SignupInput) => {
    try {
      await signup({
        variables: {
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          email: data.email,
          password: data.password,
        },
      });
      router.push(ROUTES.signup.path);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<SignupInput>({
    resolver: joiResolver(signupSchema),
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const firstNameError = errors.firstName?.message;
  const lastNameError = errors.lastName?.message;
  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const rtl = commonLocale.i18n.language === 'ar';

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
          {signupTrans.t('headTitle')}
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
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
            <FormControl
              label={signupTrans.t('firstNameLabel')}
              error={firstNameError && commonLocale.t(firstNameError)}
              // hideErrorPlaceholder?: boolean;
              htmlFor="firstName"
              helperTextId="firstName"
            >
              <Controller
                control={control}
                name="firstName"
                render={({field: {value, onChange}}) => (
                  <InputField
                    id="firstName"
                    ariaLabel="firstName"
                    error={!!firstNameError}
                    name="firstName"
                    onChange={onChange}
                    placeholder={signupTrans.t('firstNamePlaceholder')}
                    testId="first-name-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <FormControl
              label={signupTrans.t('lastNameLabel')}
              error={lastNameError && commonLocale.t(lastNameError)}
              // hideErrorPlaceholder?: boolean;
              htmlFor="lastName"
              helperTextId="lastName"
            >
              <Controller
                control={control}
                name="lastName"
                render={({field: {value, onChange}}) => (
                  <InputField
                    id="lastName"
                    ariaLabel="lastName"
                    error={!!lastNameError}
                    name="lastName"
                    onChange={onChange}
                    placeholder={signupTrans.t('lastNamePlaceholder')}
                    testId="last-name-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <FormControl
              label={commonLocale.t('emailLabel')}
              error={emailError && commonLocale.t(emailError)}
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
                    placeholder={commonLocale.t('emailPlaceholder')}
                    testId="email-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <FormControl
              label={commonLocale.t('passwordLabel')}
              error={passwordError && commonLocale.t(passwordError)}
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
                    placeholder={commonLocale.t('passwordPlaceholder')}
                    testId="password-input"
                    value={value}
                    rtl={rtl}
                  />
                )}
              />
            </FormControl>

            <div>
              <div
                className={clsx('mt-7', 'flex', 'items-center', 'justify-end')}
              >
                <div className="text-sm mb-3">
                  <Link
                    href={ROUTES.login.path}
                    className="font-medium text-red-500 hover:text-red-400"
                  >
                    {signupTrans.t('youHaveAccount')}
                  </Link>
                </div>
              </div>

              <div>
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
                  {signupTrans.t('actionButton')}
                </LoadingButton>
              </div>
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
    'signup',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default Signup;
