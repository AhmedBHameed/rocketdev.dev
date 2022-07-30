import {Tab} from '@headlessui/react';
import {joiResolver} from '@hookform/resolvers/joi';
import {get} from 'lodash';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {ulid} from 'ulid';
import {
  LanguageEnum,
  Post,
  PostTypeEnum,
  useUpsertPostContentMutation,
  useUpsertPostMutation,
} from '../../../graphql/generated/graphql';
import LIST_QUERIER_POSTS_QUERY from '../../../graphql/querier/LIST_POSTS.gql';
import theme from '../../../styles/theme';
import clsx from '../../../utils/clsx';
import slugToTitle from '../../../utils/slugToTitle';
import titleToSlug from '../../../utils/titleToSlug';
import LoadingButton from '../../Buttons/LoadingButton';
import Col from '../../Col/Col';
import {FormControl, InputField} from '../../Forms';
import SelectMenu, {Option} from '../../Forms/SelectMenu';
import Textarea from '../../Forms/Textarea';
import Toggle from '../../Forms/Toggle';
import MDPreviewClient from '../../MDPreview/MDPreviewClient';
import Row from '../../Row/Row';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';
import postSchema from './postSchema';

interface DashboardPostFormProps {
  loading?: boolean;
  post?: Post;
}

const DashboardPostForm = ({post, loading}: DashboardPostFormProps) => {
  const {t} = useTranslation(['common', 'posts']);
  const {notify} = useNotifications();

  const [upsertPost] = useUpsertPostMutation();
  const [upsertPostContent, {loading: isUpsertLoading}] =
    useUpsertPostContentMutation();

  const postTypeOptions = useMemo(() => {
    return [PostTypeEnum.Article, PostTypeEnum.Course].map((value) => ({
      value,
      label: value,
    }));
  }, []);

  const {
    control,
    formState: {errors, isValid},
    handleSubmit,
    watch,
  } = useForm<Post>({
    resolver: joiResolver(postSchema),
    mode: 'onChange',
    defaultValues: {
      id: get(post, 'id', ulid()),
      nanoId: get(post, 'nanoId', ''),
      slug: get(post, 'slug', ''),
      type: get(post, 'type', PostTypeEnum.Course) as PostTypeEnum,
      groupName: get(post, 'groupName', ''),
      isPremium: get(post, 'isPremium', true),
      visibility: get(post, 'visibility', false),
      nextPostId: get(post, 'nextPostId', ''),
      prevPostId: get(post, 'prevPostId', ''),
      tagIds: get(post, 'tagIds', []),
      postContents: [
        {
          id: get(post, 'postContents[0].id', ulid()),
          body: get(post, 'postContents[0].body', ''),
          contentPreview: get(post, 'postContents[0].contentPreview', ''),
          lang: get(post, 'postContents[0].lang', LanguageEnum.En),
          postImage: get(post, 'postContents[0].postImage', ''),
        },
      ],
    },
  });

  const postBody = watch('postContents.0.body');

  const submitPostAndPostContent = useCallback(
    async ({
      id,
      isPremium,
      slug,
      visibility,
      type,
      groupName,
      nextPostId,
      prevPostId,
      postContents,
    }: Post) => {
      await upsertPostContent({
        variables: {
          postId: id,
          input: {
            id: get(postContents, '0.id'),
            body: get(postContents, '0.body', ''),
            lang: get(postContents, '0.lang', LanguageEnum.En),
            contentPreview: get(postContents, '0.contentPreview', ''),
            postImage: get(postContents, '0.postImage', ''),
            metaTags: get(postContents, '0.metaTags', {
              injectHeader: '',
              injectCssStyle: '',
              description: '',
            }),
          },
        },
      });

      await upsertPost({
        variables: {
          input: {
            id,
            isPremium,
            nextPostId,
            prevPostId,
            slug,
            groupName,
            type,
            visibility,
          },
        },
        update: (
          cache,
          {
            data: {
              mutator: {upsertPost},
            },
          }
        ) => {
          const posts = cache.readQuery<Post[]>({
            query: LIST_QUERIER_POSTS_QUERY,
          });
          if (posts) {
            const copyPosts = [...posts];

            const modifiedIndex = copyPosts.findIndex(
              (post) => post.id === upsertPost.id
            );
            copyPosts[modifiedIndex] = upsertPost as Post;

            cache.writeQuery({
              query: LIST_QUERIER_POSTS_QUERY,
              data: {
                querier: {
                  listPosts: copyPosts,
                },
              },
            });
          }
        },
      });

      notify({
        title: 'Post content updated',
        message: 'Post content updated successfully',
        type: 'success',
      });
    },
    [upsertPost, upsertPostContent, notify]
  );

  const slugError = get(errors, 'slug', null);
  const groupNameError = get(errors, 'groupName', null);
  const typeError = get(errors, 'type', null);
  const postBodyError = get(errors, 'postContents.0.body.message', null);
  const contentPreviewError = get(
    errors,
    'postContents.0.contentPreview.message',
    null
  );
  const postContentImageError = get(
    errors,
    'postContents.0.postImage.message',
    null
  );

  return (
    <div className="mt-6 prose prose-indigo prose-2xl mx-auto">
      <Row gutter={[8, 8]} gap={4} xs={1}>
        <Col>
          <article className={clsx('prose', 'lg:prose-xl', theme.text)}>
            Post: {post.id || ''}
          </article>
        </Col>

        <Col>
          <form
            onSubmit={handleSubmit(submitPostAndPostContent)}
            className="space-y-2"
          >
            <Row gap={4} xs={1}>
              <Col>
                <FormControl
                  label={t('postImage', {
                    ns: 'post',
                    defaultValue: 'Post image (for preview only)',
                  })}
                  error={t(groupNameError)}
                  htmlFor="postImage"
                  helperTextId="postImage"
                >
                  <Controller
                    control={control}
                    name="postContents.0.postImage"
                    render={({field: {value, onChange}}) => (
                      <InputField
                        id="postImage"
                        ariaLabel="postImage"
                        error={!!postContentImageError}
                        name="postImage"
                        onChange={(event) => onChange(event.target.value)}
                        placeholder={t('postImagePlaceholder', {
                          ns: 'post',
                          defaultValue: 'Post image',
                        })}
                        testId="post-image-input"
                        value={value}
                      />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl
                  label={t('slugTitle', {
                    ns: 'post',
                    defaultValue: 'Slug',
                  })}
                  error={t(groupNameError)}
                  htmlFor="slug"
                  helperTextId="slug"
                >
                  <Controller
                    control={control}
                    name="slug"
                    render={({field: {value, onChange}}) => (
                      <InputField
                        id="slug"
                        ariaLabel="slug"
                        error={!!slugError}
                        name="body"
                        onChange={(event) =>
                          onChange(titleToSlug(event.target.value))
                        }
                        placeholder={t('slugPlaceholder', {
                          ns: 'post',
                          defaultValue: 'Slug',
                        })}
                        testId="slug-input"
                        value={slugToTitle(value)}
                      />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl
                  label={t('groupNameTitle', {
                    ns: 'post',
                    defaultValue: 'Group name',
                  })}
                  error={t(groupNameError)}
                  // hideErrorPlaceholder?: boolean;
                  htmlFor="groupName"
                  helperTextId="groupName"
                >
                  <Controller
                    control={control}
                    name="groupName"
                    render={({field: {value, onChange}}) => (
                      <InputField
                        id="groupName"
                        ariaLabel="groupName"
                        error={!!groupNameError}
                        name="body"
                        onChange={onChange}
                        placeholder={t('groupNamePlaceholder', {
                          ns: 'post',
                          defaultValue: 'Group name',
                        })}
                        testId="group-name-input"
                        value={value}
                      />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl
                  label={t('postTypeTitle', {
                    ns: 'post',
                    defaultValue: 'Post type',
                  })}
                  error={t(groupNameError)}
                  // hideErrorPlaceholder?: boolean;
                  htmlFor="type"
                  helperTextId="type"
                >
                  <Controller
                    control={control}
                    name="type"
                    render={({field: {value, onChange}}) => (
                      <SelectMenu
                        id="type"
                        options={postTypeOptions}
                        error={!!typeError}
                        name="type"
                        onChange={onChange}
                        placeholder={t('groupNamePlaceholder', {
                          ns: 'post',
                          defaultValue: 'Post type',
                        })}
                        testId="post-type-select"
                        value={value}
                      />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl>
                  <Controller
                    control={control}
                    name="isPremium"
                    render={({field: {value, onChange}}) => (
                      <Toggle
                        label="Is premium?"
                        name="isPremium"
                        onChange={onChange}
                        testId="is-premium-checkbox"
                        value={value}
                      />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl>
                  <Controller
                    control={control}
                    name="visibility"
                    render={({field: {value, onChange}}) => (
                      <Toggle
                        label="Is visible?"
                        name="visibility"
                        onChange={onChange}
                        testId="visibility-checkbox"
                        value={value}
                      />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
                <FormControl
                  label={t('contentPreviewTitle', {
                    ns: 'post',
                    defaultValue: 'Content preview',
                  })}
                  error={t(contentPreviewError)}
                  // hideErrorPlaceholder?: boolean;
                  htmlFor="contentPreview"
                  helperTextId="contentPreview"
                >
                  <Controller
                    control={control}
                    name="postContents.0.contentPreview"
                    render={({field: {value, onChange}}) => (
                      <Textarea
                        id="contentPreview"
                        ariaLabel="contentPreview"
                        error={!!contentPreviewError}
                        name="contentPreview"
                        rows={5}
                        onChange={onChange}
                        placeholder={t('contentPreviewPlaceholder', {
                          ns: 'contentPreview',
                          defaultValue: 'Content preview',
                        })}
                        testId="content-preview-input"
                        value={value}
                      />

                      // <InputField
                      //   id="contentPreview"
                      //   ariaLabel="contentPreview"
                      //   error={!!contentPreviewError}
                      //   name="contentPreview"
                      //   onChange={onChange}
                      //   placeholder={t('contentPreviewPlaceholder', {
                      //     ns: 'post',
                      //     defaultValue: 'Group name',
                      //   })}
                      //   testId="group-name-input"
                      //   value={value}
                      // />
                    )}
                  />
                </FormControl>
              </Col>

              <Col>
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
                      </Tab.List>

                      <Tab.Panels className="mt-2">
                        <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                          <FormControl
                            label={t('postBodyTitle', {
                              ns: 'post',
                              defaultValue: 'Post body',
                            })}
                            error={t(postBodyError)}
                            // hideErrorPlaceholder?: boolean;
                            htmlFor="message"
                            helperTextId="message"
                          >
                            <Controller
                              control={control}
                              name="postContents.0.body"
                              render={({field: {value, onChange}}) => (
                                <Textarea
                                  id="body"
                                  ariaLabel="body"
                                  error={!!postBodyError}
                                  name="body"
                                  rows={100}
                                  onChange={onChange}
                                  placeholder={t('postBodyPlaceholder', {
                                    ns: 'post',
                                    defaultValue: 'Post body here',
                                  })}
                                  testId="post-body-input"
                                  value={value}
                                />
                              )}
                            />
                          </FormControl>
                        </Tab.Panel>

                        <Tab.Panel className="p-0.5 -m-0.5 rounded-lg">
                          <div className="border-b">
                            <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                              <MDPreviewClient markdown={postBody} />
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
                  disabled={!isValid || isUpsertLoading}
                  type="submit"
                  className={clsx(
                    'w-full',
                    'bg-green-500',
                    'text-gray-50',
                    'flex',
                    'justify-center'
                  )}
                  loading={loading || isUpsertLoading}
                >
                  {t('actionButton', {
                    ns: 'post',
                    defaultValue: 'Send',
                  })}
                </LoadingButton>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPostForm;
