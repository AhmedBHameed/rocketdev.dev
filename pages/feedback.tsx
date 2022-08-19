import {joiResolver} from '@hookform/resolvers/joi';
import {GetStaticProps, NextPage} from 'next';
import {useTranslation} from 'next-i18next';
import Col from '../components/Col/Col';
import Layout from '../components/Layout';
import Row from '../components/Row/Row';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import React, {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ulid} from 'ulid';
import feedbackSchema from '../components/Feedback/feedbackSchema';
import {FormControl, InputField} from '../components/Forms';
import Textarea from '../components/Forms/Textarea';
import {
  FeedbackInput,
  useUpsertFeedbackMutation,
} from '../graphql/generated/graphql';
import clsx from '../utils/clsx';
import LoadingButton from '../components/Buttons/LoadingButton';
import {useNotifications} from '../components/ToastMessage/Hooks/NotificationsHook';
import MDPreviewClient from '../components/MDPreview/MDPreviewClient';
import {Tab} from '@headlessui/react';
import theme from '../styles/theme';
import useVerifyMe from '../components/hooks/verifyMeHook';
import Loader from '../components/Loader/Loader';
import AlertError from '../components/AlertError/AlertError';

const Feedback: NextPage = () => {
  const {loading: verifyMeLoading, error: verifyMeError} = useVerifyMe();

  const {t} = useTranslation(['validation', 'feedback']);
  const {notify} = useNotifications();
  const [upsertFeedback, {loading}] = useUpsertFeedbackMutation();

  const {
    control,
    formState: {errors, isValid},
    handleSubmit,
    watch,
  } = useForm<Omit<FeedbackInput, 'id'>>({
    resolver: joiResolver(feedbackSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      message: '',
      resolved: false,
    },
  });

  const sendFeedback = useCallback(
    async (feedback: Omit<FeedbackInput, 'id'>) => {
      try {
        await upsertFeedback({
          variables: {
            input: {
              id: ulid(),
              ...feedback,
            },
          },
        });
        notify({
          title: t('success.submitFeedbackSuccessful.title', {
            ns: 'feedback',
          }),
          message: t('success.submitFeedbackSuccessful.message', {
            ns: 'feedback',
          }),
          type: 'success',
        });
      } catch (error) {
        notify({
          title: t('error.submitFeedbackFailed.title', {
            ns: 'feedback',
          }),
          message: t('error.submitFeedbackFailed.message', {
            ns: 'feedback',
          }),
          type: 'error',
        });
      }
    },
    [notify, t, upsertFeedback]
  );

  const message = watch('message');

  if (verifyMeLoading)
    return (
      <Layout>
        <div
          className={clsx(
            'flex',
            'justify-center',
            'items-center',
            'h-[calc(100vh-64px)]'
          )}
        >
          <Loader />
        </div>
      </Layout>
    );

  if (verifyMeError)
    return (
      <Layout>
        <AlertError message={verifyMeError.message} httpStatusCode={401} />
      </Layout>
    );

  const titleError = errors.title?.message;
  const messageError = errors.message?.message;

  return (
    <Layout>
      <div className="mt-6 prose prose-indigo prose-lg mx-auto">
        <Row gutter={[8, 8]} xs={1}>
          <Col>
            <form onSubmit={handleSubmit(sendFeedback)} className="space-y-2">
              <Row gap={10} xs={1}>
                <Col>
                  <FormControl
                    label={t('titleLabel', {
                      ns: 'feedback',
                      defaultValue: 'Title',
                    })}
                    error={t(titleError)}
                    // hideErrorPlaceholder?: boolean;
                    htmlFor="title"
                    helperTextId="title"
                  >
                    <Controller
                      control={control}
                      name="title"
                      render={({field: {value, onChange}}) => (
                        <InputField
                          id="title"
                          ariaLabel="title"
                          error={!!titleError}
                          name="title"
                          onChange={onChange}
                          placeholder={t('titlePlaceholder', {
                            ns: 'feedback',
                            defaultValue: 'Write your issue title here',
                          })}
                          testId="title-input"
                          value={value}
                        />
                      )}
                    />
                  </FormControl>
                </Col>

                <Col className={clsx('mb-2')}>
                  <Tab.Group defaultIndex={0}>
                    {({selectedIndex}) => (
                      <>
                        <Tab.List className="flex items-center">
                          <Tab
                            className={({selected}) =>
                              clsx(
                                theme.text,
                                theme.bgMain,
                                'px-3 py-1.5 border border-transparent text-sm font-medium rounded-md'
                              )
                            }
                          >
                            Write
                          </Tab>
                          <Tab
                            className={({selected}) =>
                              clsx(
                                theme.text,
                                theme.bgMain,
                                'ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md'
                              )
                            }
                          >
                            Preview
                          </Tab>
                          {/* These buttons are here simply as examples and don't
                          actually do anything. */}
                          {/* {selectedIndex === 0 ? (
                            <div className="ml-auto flex items-center space-x-5">
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Insert link</span>
                                  <LinkIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">Insert code</span>
                                  <CodeIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                              <div className="flex items-center">
                                <button
                                  type="button"
                                  className="-m-2.5 w-10 h-10 rounded-full inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                                >
                                  <span className="sr-only">
                                    Mention someone
                                  </span>
                                  <AtSymbolIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          ) : null} */}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                          <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                            <FormControl
                              label={t('messageTitle', {
                                ns: 'feedback',
                                defaultValue: 'Message',
                              })}
                              error={t(messageError)}
                              // hideErrorPlaceholder?: boolean;
                              htmlFor="message"
                              helperTextId="message"
                            >
                              <Controller
                                control={control}
                                name="message"
                                render={({field: {value, onChange}}) => (
                                  <Textarea
                                    id="message"
                                    ariaLabel="message"
                                    error={!!messageError}
                                    name="message"
                                    rows={5}
                                    onChange={onChange}
                                    placeholder={t('messagePlaceholder', {
                                      ns: 'feedback',
                                      defaultValue:
                                        'In case you find issue, please write your message here',
                                    })}
                                    testId="message-input"
                                    value={value}
                                  />
                                )}
                              />
                            </FormControl>

                            {/* <label htmlFor="comment" className="sr-only">
                              Comment
                            </label>
                            <div>
                              <textarea
                                rows={5}
                                name="comment"
                                id="comment"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="Add your comment..."
                                defaultValue={''}
                              />
                            </div> */}
                          </Tab.Panel>
                          <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                            <div className="border-b">
                              <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                                <MDPreviewClient markdown={message} />
                              </div>
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </>
                    )}
                  </Tab.Group>
                </Col>

                <Col className={clsx('w-full')}>
                  <LoadingButton
                    disabled={!isValid}
                    type="submit"
                    className={clsx(
                      'w-full',
                      'bg-green-500',
                      'text-gray-50',
                      'flex',
                      'justify-center'
                    )}
                    loading={loading}
                  >
                    {t('actionButton', {
                      ns: 'feedback',
                      defaultValue: 'Send',
                    })}
                  </LoadingButton>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'validation',
    'feedback',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default Feedback;
