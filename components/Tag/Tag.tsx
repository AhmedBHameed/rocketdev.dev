import React from 'react';
import clsx from '../../utils/clsx';
import darkenHexColor from '../../utils/darkenHexColor';

interface TagProps {
  label: string;
  bgColor?: string;
  className?: string;
}

const Tag = ({label, className, bgColor}: TagProps) => {
  return (
    <span
      className={clsx(
        'inline-flex',
        'rounded-full',
        'bg-green-100',
        'px-2',
        'text-xs',
        'font-semibold',
        'leading-5',
        'text-green-800',
        className
      )}
      style={{
        color: darkenHexColor(bgColor, 30),
        backgroundClip: bgColor,
      }}
    >
      {label}
    </span>
  );
};

export default Tag;
