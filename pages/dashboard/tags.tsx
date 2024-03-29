import {get} from 'lodash';
import Image from 'next/image';
import React, {useCallback, useEffect, useMemo} from 'react';
import AlertError from '../../components/AlertError/AlertError';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import AddTagButton from '../../components/Dashboard/Tags/AddTagButton';
import EditTagButton from '../../components/Dashboard/Tags/EditTagButton';
import usePagination from '../../components/Table/hooks/paginationHook';
import Table, {Column} from '../../components/Table/Table';
import {
  Tag,
  useListQuerierTagsLazyQuery,
} from '../../graphql/generated/graphql';

const Tags = () => {
  const {skip, top} = usePagination();
  const [listTagsQuery, {data, error}] = useListQuerierTagsLazyQuery();

  const paginateListTags = useCallback(
    async (skip = 0) => {
      const params = new URLSearchParams();
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      await listTagsQuery({
        variables: {
          query: params.toString(),
        },
      });
    },
    [top, listTagsQuery]
  );

  const handleOnPaginationChange = useCallback(
    (selectedPage: number) => {
      paginateListTags(selectedPage);
    },
    [paginateListTags]
  );

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Image',
        dataIndex: 'imgSrc',
        key: 'imgSrc',
        render: (_, row) => (
          <>
            {row.imgSrc && (
              <Image
                className="inline-block h-14 w-14 rounded-md"
                src={row.imgSrc}
                alt=""
                width={56}
                height={56}
              />
            )}
          </>
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        dataIndex: 'edit',
        key: 'edit',
        render: (_, row) => <EditTagButton tag={row} />,
      },
    ] as Column<Tag>[];
  }, []);

  useEffect(() => {
    paginateListTags(skip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error)
    return (
      <DashboardLayout>
        <AlertError message={error.message} httpStatusCode={401} />
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="flex justify-end px-4">
        <AddTagButton skip={skip} top={top} />
      </div>

      <Table
        rowKey="id"
        dataSource={get(data, 'querier.listTags', [])}
        columns={tableColumn}
        // pagination={{
        //   totalItems: get(data, 'querier.totalTags', 0),
        //   onChange: handleOnPaginationChange,
        // }}
      />
    </DashboardLayout>
  );
};

export default Tags;
