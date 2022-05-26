import React from 'react';
import clsx from '../../../utils/clsx';

interface ParagraphProps {
  children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({children}) => {
  return <p className={clsx('dark:text-zinc-300')}>{children}</p>;
};

export default Paragraph;
