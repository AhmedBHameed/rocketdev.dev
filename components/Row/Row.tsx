import {get} from 'lodash';
import React from 'react';
import clsx from '../../utils/clsx';

interface RowProps {
  gutter?: [number, number?];
  className?: string;
  children?: React.ReactNode;
  gap?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const Row: React.FC<RowProps> = ({
  gutter,
  className,
  children,
  gap,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}) => {
  return (
    <div
      className={clsx(
        className,
        'grid',

        xs === 1 && 'grid-cols-1',
        xs === 2 && 'grid-cols-2',
        xs === 3 && 'grid-cols-3',
        xs === 4 && 'grid-cols-4',
        xs === 5 && 'grid-cols-5',
        xs === 6 && 'grid-cols-6',
        xs === 7 && 'grid-cols-7',
        xs === 8 && 'grid-cols-8',
        xs === 9 && 'grid-cols-9',
        xs === 10 && 'grid-cols-10',
        xs === 11 && 'grid-cols-11',
        xs === 12 && 'grid-cols-12',

        sm === 1 && 'sm:grid-cols-1',
        sm === 2 && 'sm:grid-cols-2',
        sm === 3 && 'sm:grid-cols-3',
        sm === 4 && 'sm:grid-cols-4',
        sm === 5 && 'sm:grid-cols-5',
        sm === 6 && 'sm:grid-cols-6',
        sm === 7 && 'sm:grid-cols-7',
        sm === 8 && 'sm:grid-cols-8',
        sm === 9 && 'sm:grid-cols-9',
        sm === 10 && 'sm:grid-cols-10',
        sm === 11 && 'sm:grid-cols-11',
        sm === 12 && 'sm:grid-cols-12',

        md === 1 && 'md:grid-cols-1',
        md === 2 && 'md:grid-cols-2',
        md === 3 && 'md:grid-cols-3',
        md === 4 && 'md:grid-cols-4',
        md === 5 && 'md:grid-cols-5',
        md === 6 && 'md:grid-cols-6',
        md === 7 && 'md:grid-cols-7',
        md === 8 && 'md:grid-cols-8',
        md === 9 && 'md:grid-cols-9',
        md === 10 && 'md:grid-cols-10',
        md === 11 && 'md:grid-cols-11',
        md === 12 && 'md:grid-cols-12',

        xl === 1 && 'xl:grid-cols-1',
        xl === 2 && 'xl:grid-cols-2',
        xl === 3 && 'xl:grid-cols-3',
        xl === 4 && 'xl:grid-cols-4',
        xl === 5 && 'xl:grid-cols-5',
        xl === 6 && 'xl:grid-cols-6',
        xl === 7 && 'xl:grid-cols-7',
        xl === 8 && 'xl:grid-cols-8',
        xl === 9 && 'xl:grid-cols-9',
        xl === 10 && 'xl:grid-cols-10',
        xl === 11 && 'xl:grid-cols-11',
        xl === 12 && 'xl:grid-cols-12',

        xxl === 1 && 'xxl:grid-cols-1',
        xxl === 2 && 'xxl:grid-cols-2',
        xxl === 3 && 'xxl:grid-cols-3',
        xxl === 4 && 'xxl:grid-cols-4',
        xxl === 5 && 'xxl:grid-cols-5',
        xxl === 6 && 'xxl:grid-cols-6',
        xxl === 7 && 'xxl:grid-cols-7',
        xxl === 8 && 'xxl:grid-cols-8',
        xxl === 9 && 'xxl:grid-cols-9',
        xxl === 10 && 'xxl:grid-cols-10',
        xxl === 11 && 'xxl:grid-cols-11',
        xxl === 12 && 'xxl:grid-cols-12',

        xxl === 1 && 'xxl:grid-cols-1',
        xxl === 2 && 'xxl:grid-cols-2',
        xxl === 3 && 'xxl:grid-cols-3',
        xxl === 4 && 'xxl:grid-cols-4',
        xxl === 5 && 'xxl:grid-cols-5',
        xxl === 6 && 'xxl:grid-cols-6',
        xxl === 7 && 'xxl:grid-cols-7',
        xxl === 8 && 'xxl:grid-cols-8',
        xxl === 9 && 'xxl:grid-cols-9',
        xxl === 10 && 'xxl:grid-cols-10',
        xxl === 11 && 'xxl:grid-cols-11',
        xxl === 12 && 'xxl:grid-cols-12',

        gap === 1 && 'gap-1',
        gap === 2 && 'gap-2',
        gap === 3 && 'gap-3',
        gap === 4 && 'gap-4',

        get(gutter, '[0]') === 1 && 'px-1',
        get(gutter, '[0]') === 2 && 'px-2',
        get(gutter, '[0]') === 3 && 'px-3',
        get(gutter, '[0]') === 4 && 'px-4',
        get(gutter, '[0]') === 5 && 'px-5',
        get(gutter, '[0]') === 6 && 'px-6',
        get(gutter, '[0]') === 7 && 'px-7',
        get(gutter, '[0]') === 8 && 'px-8',
        get(gutter, '[0]') === 9 && 'px-9',
        get(gutter, '[0]') === 10 && 'px-10',
        get(gutter, '[0]') === 11 && 'px-11',
        get(gutter, '[0]') === 12 && 'px-12',

        get(gutter, '[1]') === 1 && 'py-1',
        get(gutter, '[1]') === 2 && 'py-2',
        get(gutter, '[1]') === 3 && 'py-3',
        get(gutter, '[1]') === 4 && 'py-4',
        get(gutter, '[1]') === 5 && 'py-5',
        get(gutter, '[1]') === 6 && 'py-6',
        get(gutter, '[1]') === 7 && 'py-7',
        get(gutter, '[1]') === 8 && 'py-8',
        get(gutter, '[1]') === 9 && 'py-9',
        get(gutter, '[1]') === 10 && 'py-10',
        get(gutter, '[1]') === 11 && 'py-11',
        get(gutter, '[1]') === 12 && 'py-12'
      )}
    >
      {children}
    </div>
  );
};

export default Row;
