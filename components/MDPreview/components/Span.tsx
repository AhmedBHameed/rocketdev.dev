import React from 'react';
import clsx from '../../../utils/clsx';

interface ParagraphProps {
  children?: React.ReactNode;
}

const Paragraph = ({children}: ParagraphProps) => {
  return (
    <span className={clsx('dark:text-zinc-300', 'block', 'my-5')}>
      {children}
    </span>
  );
};

export default Paragraph;
