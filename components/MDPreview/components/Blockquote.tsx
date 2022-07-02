import React from 'react';
import theme from '../../../styles/theme';
import clsx from '../../../utils/clsx';

interface BlockquoteProps {
  children?: React.ReactNode;
}

const Blockquote = (props: BlockquoteProps) => {
  return (
    <blockquote
      className={clsx(
        theme.bgSecondary,
        'p-5',
        'border-l-4',
        'border-blue-800'
      )}
    >
      {props.children}
    </blockquote>
  );
};

export default Blockquote;
