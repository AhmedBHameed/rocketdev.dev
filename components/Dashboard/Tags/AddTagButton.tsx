import {get} from 'lodash';
import React, {useCallback} from 'react';
import {ulid} from 'ulid';
import {
  ListQuerierTagsDocument,
  ListQuerierTagsQuery,
  useUpsertTagMutation,
} from '../../../graphql/generated/graphql';
import LoadingButton from '../../Buttons/LoadingButton';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface AddTagButtonProps {
  skip: number;
  top: number;
}

const AddTagButton = ({skip, top}: AddTagButtonProps) => {
  const {notify} = useNotifications();

  const [upsertTag, {loading}] = useUpsertTagMutation();

  const handleOnSubmit = useCallback(async () => {
    await upsertTag({
      variables: {
        input: {
          id: ulid(),
          color: '',
          description: '',
          name: `new-tag-${crypto.randomUUID().slice(-10)}`,
          imgSrc: '',
          visibility: false,
        },
      },
      update: (
        cache,
        {
          data: {
            mutator: {upsertTag},
          },
        }
      ) => {
        const tags = cache.readQuery<ListQuerierTagsQuery>({
          query: ListQuerierTagsDocument,
          variables: {
            input: {
              page: {
                number: skip,
                size: top,
              },
            },
          },
        });

        if (get(tags, 'querier.listTags.length', 0)) {
          cache.writeQuery({
            query: ListQuerierTagsDocument,
            variables: {
              input: {
                page: {
                  number: skip,
                  size: top,
                },
              },
            },
            data: {
              querier: {
                totalPosts: tags.querier.listTags.length + 1,
                listTags: [...tags.querier.listTags, upsertTag],
              },
            },
          });
        }
      },
    });

    notify({
      title: 'Tag creation',
      message: 'Tag data has been created successfully',
      type: 'success',
    });
  }, [skip, top, upsertTag, notify]);

  return (
    <LoadingButton loading={loading} onClick={handleOnSubmit}>
      Create new tag
    </LoadingButton>
  );
};

export default AddTagButton;
