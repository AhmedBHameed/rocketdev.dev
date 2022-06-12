import {useState} from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [total, setTotal] = useState(0);

  return {
    page,
    perPage,
    total,
    setPage,
    setPerPage,
    setTotal,
  };
};

export default usePagination;
