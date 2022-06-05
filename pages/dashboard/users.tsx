import React, {useCallback, useEffect, useMemo, useState} from 'react';
import AlertError from '../../components/AlertError/AlertError';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import {
  Authorization,
  useListUsersLazyQuery,
  User,
} from '../../graphql/generated/graphql';
import Table, {Column} from '../../components/Table/Table';
import Link from '../../components/Buttons/Link';
import Modal from '../../components/Modal/Modal';
import Avatar from '../../components/Avatar/Avatar';
import {InteractionProps} from 'react-json-view';
import JsonView from '../../components/JsonView/JsonView';
import getUserName from '../../utils/getUserName';

const users = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [useAuthorization, setUseAuthorization] = useState<
    Authorization | undefined
  >();
  const [listUserQuery, {data, error}] = useListUsersLazyQuery();

  const paginateListUsers = useCallback(
    async (pageNumber = 1, pageSize = 10) => {
      await listUserQuery({
        variables: {
          input: {
            page: {
              number: pageNumber,
              size: pageSize,
            },
          },
        },
      });
    },
    []
  );

  const handleAuthOnEdit = useCallback((edit: InteractionProps) => {
    console.log(edit);
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
          <Link
            onClick={() => {
              setUseAuthorization(row.authorization);
              setOpenAuthModal(true);
            }}
          >
            Edit Authorization
          </Link>
        ),
      },
    ] as Column<User>[];
  }, []);

  useEffect(() => {
    paginateListUsers(1, 1);
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
        scroll={{
          y: 250,
        }}
      />

      <Modal
        title="User authorizations"
        open={openAuthModal}
        onClose={() => setOpenAuthModal(false)}
      >
        <JsonView
          name="authorization"
          src={useAuthorization}
          onEdit={handleAuthOnEdit}
          onAdd={handleAuthOnEdit}
          onDelete={handleAuthOnEdit}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default users;
