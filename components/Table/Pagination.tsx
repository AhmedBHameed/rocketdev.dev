import React, {useCallback, useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import clsx from '../../utils/clsx';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  onPagination?: (page: number) => void;
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  onPagination,
}: PaginationProps) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemOffset, totalItems, itemsPerPage]);

  const handlePageClick = useCallback(
    ({selected}: {selected: number}) => {
      const newOffset = (selected * itemsPerPage) % totalItems;

      setItemOffset(newOffset);
      onPagination(selected + 1);
    },
    [totalItems, onPagination]
  );

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
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
