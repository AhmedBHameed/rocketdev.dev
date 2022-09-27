import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AlertError from '../../components/AlertError/AlertError';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import {
  Authorization,
  useListUsersLazyQuery,
  User,
} from '../../graphql/generated/graphql';
import Table, {Column} from '../../components/Table/Table';
import Modal from '../../components/Modal/Modal';
import Avatar from '../../components/Avatar/Avatar';
import getUserName from '../../utils/getUserName';
import JsonViewContainer from '../../components/JsonView/JsonViewContainer';
import EditUserButton from '../../components/Dashboard/Users/EditUserButton';
import {omit} from 'lodash';
import EditAuthorizationButton from '../../components/Dashboard/Users/EditAuthorizationButton';
import {GetStaticProps, NextPage} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import usePagination from '../../components/Table/hooks/paginationHook';
import {useRouter} from 'next/router';
import DeleteUserButton from '../../components/Dashboard/Users/DeleteUserButton';

const Users: NextPage = () => {
  const router = useRouter();
  const {skip, top} = usePagination();

  const [useAuthorization, setUseAuthorization] = useState<
    Authorization | undefined
  >();
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const [listUserQuery, {data, error}] = useListUsersLazyQuery();

  const paginateListUsers = useCallback(
    async (skip = 0) => {
      const params = new URLSearchParams();
      params.set('$skip', `${skip}`);
      params.set('$top', `${top}`);

      router.push(`?${params.toString()}`);

      await listUserQuery({
        variables: {
          query: params.toString(),
        },
      });
    },
    [top, router, listUserQuery]
  );

  const handleOnPaginationChange = useCallback(
    (selectedPage: number) => {
      paginateListUsers(selectedPage);
    },
    [paginateListUsers]
  );

  const handleAuthUpdate = useCallback((authorization: object) => {
    setOpenAuthModal(false);
  }, []);

  const tableColumn = useMemo(() => {
    return [
      {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (_, row) => (
          <Avatar
            src={row.avatar}
            firstName={row.name.first}
            lastName={row.name.last}
          />
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (_, row) => <span>{getUserName(row.name)}</span>,
      },
      {
        title: 'Authorization',
        dataIndex: 'authorization',
        key: 'authorization',
        render: (_, row) => (
          <EditAuthorizationButton authorization={row.authorization} />
        ),
      },
      {
        title: 'Action',
        dataIndex: 'edit',
        key: 'edit',
        render: (_, row) => (
          <EditUserButton user={omit(row, 'authorization')} />
        ),
      },
      {
        title: 'Delete',
        dataIndex: 'delete',
        key: 'delete',
        render: (_, row) => (
          <DeleteUserButton skip={skip} top={top} id={row.id} />
        ),
      },
    ] as Column<User>[];
  }, [skip, top]);

  useEffect(() => {
    paginateListUsers(skip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error)
    return (
      <DashboardLayout>
        <AlertError httpStatusCode={400} message={error.message} />
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <Table
        rowKey="id"
        dataSource={data?.listUsers || []}
        columns={tableColumn}
        // pagination={{
        //   totalItems: get(data, 'querier.totalTags', 0),
        //   onChange: handleOnPaginationChange,
        // }}
      />

      <Modal
        title="User authorizations"
        open={openAuthModal}
        onClose={() => setOpenAuthModal(false)}
      >
        <JsonViewContainer
          name="Edit authorization"
          onSubmit={handleAuthUpdate}
          src={useAuthorization}
          loading={false}
        />
      </Modal>
    </DashboardLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const translations = await serverSideTranslations(locale, [
    'common',
    'users',
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default Users;
