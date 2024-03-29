import React, {useCallback} from 'react';
import ReactPaginate from 'react-paginate';
import clsx from '../../utils/clsx';

interface PaginationProps {
  topPerPage: number;
  totalItems: number;
  currentPage: number;
  onPagination: (page: number) => void;
}

const Pagination = ({
  topPerPage,
  totalItems,
  currentPage,
  onPagination,
}: PaginationProps) => {
  const handlePageClick = useCallback(
    ({selected}: {selected: number}) => {
      onPagination(selected);
    },
    [onPagination]
  );

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      forcePage={currentPage ? currentPage - 1 : 0}
      pageCount={Math.ceil(totalItems / topPerPage)}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      className={clsx('flex', 'justify-center', 'items-center', 'mt-3')}
      pageClassName={clsx('mx-2')}
      pageLinkClassName={clsx('border-2', 'px-2', 'py-0.5')}
      activeLinkClassName={clsx('border-indigo-500')}
    />
  );
};

export default Pagination;
