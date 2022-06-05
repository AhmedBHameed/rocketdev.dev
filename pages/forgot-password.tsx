import {joiResolver} from '@hookform/resolvers/joi';
import {useRouter} from 'next/router';
import {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {FormControl, InputField} from '../components/Forms';

import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import RocketDevsSvg from '../components/SVG/ReactDevsSvg';
import {ROUTES} from '../config/routes';
import clsx from '../utils/clsx';
import {GetStaticProps} from 'next';
import Link from 'next/link';
import {ForgotPasswordInput} from '../components/ForgotPassword/models/ForgotPasswordInput';
import {useForgotPasswordMutation} from '../graphql/generated/graphql';
import forgotPasswordSchema from '../components/ForgotPassword/models/forgotPasswordSchema';
import LoadingButton from '../components/Buttons/LoadingButton';

const ForgotPasswordPage: React.FC = () => {
  const forgotPasswordLocale = useTranslation('forgotPassword');
  const commonLocale = useTranslation('common');
  const router = useRouter();

  const [forgotPassword, {loading}] = useForgotPasswordMutation();

  const handleForgotPassword = useCallback(
    async (data: ForgotPasswordInput) => {
      try {
        await forgotPassword({
          variables: {
            email: data.email,
          },
        });
        router.push(ROUTES.resetPassword.path);
      } catch (e) {
        console.log(e);
      }
    },
    []
  );

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<ForgotPasswordInput>({
    resolver: joiResolver(forgotPasswordSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  const emailError = errors.email?.message;

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
          {forgotPasswordLocale.t('headTitle')}
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
          <form
            onSubmit={handleSubmit(handleForgotPassword)}
            className="space-y-2"
          >
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

            <div>
              <div
                className={clsx('mt-7', 'flex', 'items-center', 'justify-end')}
              >
                <div className="text-sm mb-3">
                  <Link
                    href={ROUTES.login.path}
                    className="font-medium text-red-500 hover:text-red-400"
                  >
                    {forgotPasswordLocale.t('returnToLogin')}
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
                  {forgotPasswordLocale.t('actionButton')}
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
    'forgotPassword',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default ForgotPasswordPage;
