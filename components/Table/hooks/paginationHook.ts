import {useState} from 'react';

const usePagination = () => {
  const [skip, setSkip] = useState(0);
  const [top, setTop] = useState(10);
  const [total, setTotal] = useState(0);

  return {
    skip,
    top,
    total,
    setSkip,
    setTop,
    setTotal,
  };
};

export default usePagination;
