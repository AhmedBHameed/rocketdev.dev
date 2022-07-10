import React, {useCallback, useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import clsx from '../../utils/clsx';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({currentItems}) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

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
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    //   // Fetch items from another resources.
    //   const endOffset = itemOffset + itemsPerPage;
    //   // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    //   setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemOffset, totalItems, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = useCallback(
    ({selected}: {selected: number}) => {
      const newOffset = (selected * itemsPerPage) % totalItems;

      setItemOffset(newOffset);
      onPagination(selected + 1);
    },
    [totalItems, onPagination]
  );

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
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
    </>
  );
};

export default Pagination;
