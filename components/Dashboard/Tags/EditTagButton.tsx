import React, {useCallback, useState} from 'react';
import {
  ListQuerierTagsDocument,
  Tag,
  useUpsertTagMutation,
} from '../../../graphql/generated/graphql';
import omitDeepLodash from '../../../utils/omitDeepLodash';

import LoadingButton from '../../Buttons/LoadingButton';
import JsonViewContainer from '../../JsonView/JsonViewContainer';
import Modal from '../../Modal/Modal';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';

interface EditTagButtonProps {
  tag: Tag;
}

const EditTagButton = ({tag}: EditTagButtonProps) => {
  const [open, setOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<Tag>(tag);
  const {notify} = useNotifications();

  const [upsertTag, {loading}] = useUpsertTagMutation();

  const handleOnSubmit = useCallback(
    async (tag: Tag) => {
      const updatedTag = omitDeepLodash(tag, [
        '__typename',
        'createdAt',
        'updatedAt',
      ]);

      await upsertTag({
        variables: {
          input: updatedTag,
        },
        update: (
          cache,
          {
            data: {
              mutator: {upsertTag},
            },
          }
        ) => {
          const tags = cache.readQuery<Tag[]>({
            query: ListQuerierTagsDocument,
          });
          if (tags) {
            const copyTags = [...tags];

            const modifiedIndex = copyTags.findIndex(
              (post) => post.id === upsertTag.id
            );
            copyTags[modifiedIndex] = upsertTag;

            cache.writeQuery({
              query: ListQuerierTagsDocument,
              data: {
                querier: {
                  listTags: copyTags,
                },
              },
            });
          }
        },
      });
      setSelectedTag(tag);
      notify({
        title: 'Tag updated',
        message: 'Tag data has been updated successfully',
        type: 'success',
      });
      setOpen(false);
    },
    [notify, upsertTag]
  );

  return (
    <>
      <LoadingButton
        loading={loading}
        className="text-red-500"
        onClick={() => setOpen(true)}
      >
        Edit
      </LoadingButton>

      <Modal title="Edit tag" open={open} onClose={() => setOpen(false)}>
        <JsonViewContainer
          name="tag"
          onSubmit={handleOnSubmit}
          src={selectedTag}
          loading={false}
        />
      </Modal>
    </>
  );
};

export default EditTagButton;
