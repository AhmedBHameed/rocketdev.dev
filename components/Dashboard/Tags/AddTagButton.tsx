import {get} from 'lodash';
import React, {useCallback} from 'react';
import {ulid} from 'ulid';
import {
  ListQuerierTagsQuery,
  useUpsertTagMutation,
} from '../../../graphql/generated/graphql';
import LIST_QUERIER_TAGS_QUERY from '../../../graphql/querier/LIST_TAGS.gql';

import LoadingButton from '../../Buttons/LoadingButton';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface AddTagButtonProps {
  page: number;
  perPage: number;
}

const AddTagButton = ({page, perPage}: AddTagButtonProps) => {
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
          query: LIST_QUERIER_TAGS_QUERY,
          variables: {
            input: {
              page: {
                number: page,
                size: perPage,
              },
            },
          },
        });

        if (get(tags, 'querier.listTags.length', 0)) {
          cache.writeQuery({
            query: LIST_QUERIER_TAGS_QUERY,
            variables: {
              input: {
                page: {
                  number: page,
                  size: perPage,
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
  }, [page, perPage]);

  return (
    <LoadingButton loading={loading} onClick={handleOnSubmit}>
      Create new tag
    </LoadingButton>
  );
};

export default AddTagButton;
