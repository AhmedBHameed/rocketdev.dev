import React from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';

export interface Column<TItem> {
  title: React.ReactNode;
  dataIndex: keyof TItem;
  key: string;
  render?: (value: TItem[keyof TItem], row: TItem) => React.ReactNode;
  sorter?: (a: TItem, b: TItem) => boolean;
}

interface TableProps<TItem extends object> {
  dataSource: TItem[];
  columns: Column<TItem>[];
  loading?: boolean;
  rowKey?: keyof TItem;
  pagination?: {
    onChange?: (pageNumber: number, pageSize: number) => void;
    position?: 'bottomCenter' | 'bottomRight';
  };
  scroll?: {
    y: number;
  };
}

const Table = <TItem extends object>({
  dataSource,
  columns,
  rowKey,
  loading,
  pagination,
  scroll,
}: TableProps<TItem>) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y border-collapse divide-gray-500">
                <thead className={clsx(theme.bgSecondary, theme.text)}>
                  <tr>
                    {columns.map((cell) => {
                      return (
                        <th
                          key={cell.key}
                          scope="col"
                          className="px-3 py-4 text-left text-sm font-semibold"
                        >
                          {cell.title}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody
                  className={clsx(
                    theme.bgSecondary,
                    'divide-y divide-gray-500'
                  )}
                >
                  {dataSource.map((item) => {
                    return (
                      <tr className="table-" key={`${item[rowKey]}`}>
                        {columns.map((col, index) => {
                          return (
                            <td
                              key={`${col.key}-${index}`}
                              className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-200"
                            >
                              {
                                (col.render?.(item[col.dataIndex], item) ||
                                  item[col.dataIndex]) as React.ReactNode
                              }
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
