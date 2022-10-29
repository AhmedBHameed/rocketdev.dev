import {joiResolver} from '@hookform/resolvers/joi';
import {useRouter} from 'next/router';
import {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {FormControl, PasswordField} from '../components/Forms';

import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import RocketDevSvg from '../components/SVG/LogoSvg';
import ROUTES from '../config/routes';
import clsx from '../utils/clsx';
import {GetStaticProps} from 'next';
import Link from 'next/link';
import {useResetPasswordMutation} from '../graphql/generated/graphql';
import LoadingButton from '../components/Buttons/LoadingButton';
import resetPasswordSchema from '../components/ResetPassword/resetPasswordSchema';
import {ResetPasswordInput} from '../components/ResetPassword/models/resetPasswordInput';

const ForgotPasswordPage: React.FC = () => {
  const {t} = useTranslation('resetPassword');
  const router = useRouter();

  const [resetPassword, {loading}] = useResetPasswordMutation({
    fetchPolicy: 'network-only',
  });

  const handleResetPassword = useCallback(
    async (data: Omit<ResetPasswordInput, 'hash'>) => {
      try {
        await resetPassword({
          variables: {
            input: {
              hash: router.query.hash as string,
              newPassword: data.newPassword,
            },
          },
        });
        router.push(ROUTES.login.path);
      } catch (e) {
        console.log(e);
      }
    },
    [router, resetPassword]
  );

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<ResetPasswordInput>({
    resolver: joiResolver(resetPasswordSchema),
    mode: 'onSubmit',
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const newPasswordError = errors.newPassword?.message;
  const confirmPasswordError = errors.confirmPassword?.message;

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
          {t('headTitle', {
            defaultValue: 'Reset password',
          })}
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
            onSubmit={handleSubmit(handleResetPassword)}
            className="space-y-2"
          >
            <FormControl
              label={t('newPasswordLabel')}
              error={newPasswordError && t(newPasswordError)}
              // hideErrorPlaceholder?: boolean;
              htmlFor="newPassword"
              helperTextId="newPassword"
            >
              <Controller
                control={control}
                name="newPassword"
                render={({field: {value, onChange}}) => (
                  <PasswordField
                    id="newPassword"
                    ariaLabel="newPassword"
                    error={!!newPasswordError}
                    name="newPassword"
                    onChange={onChange}
                    placeholder={t('newPasswordPlaceholder', {
                      defaultValue: 'New password',
                    })}
                    testId="new-password-input"
                    value={value}
                  />
                )}
              />
            </FormControl>

            <FormControl
              label={t('confirmPasswordLabel')}
              error={newPasswordError && t(confirmPasswordError)}
              // hideErrorPlaceholder?: boolean;
              htmlFor="confirmPassword"
              helperTextId="confirmPassword"
            >
              <Controller
                control={control}
                name="confirmPassword"
                render={({field: {value, onChange}}) => (
                  <PasswordField
                    id="confirmPassword"
                    ariaLabel="confirmPassword"
                    error={!!confirmPasswordError}
                    name="confirmPassword"
                    onChange={onChange}
                    placeholder={t('confirmPasswordPlaceholder', {
                      defaultValue: 'Confirm password',
                    })}
                    testId="new-password-input"
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
                    className="font-medium text-red-500 hover:text-red-400">

                    {t('returnToLogin', {
                      defaultValue: 'Return to login',
                    })}

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
                  {t('actionButton', {
                    defaultValue: 'Reset password',
                  })}
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
  const translations = await serverSideTranslations(locale, ['resetPassword']);

  return {
    props: {
      ...translations,
    },
  };
};

export default ForgotPasswordPage;
