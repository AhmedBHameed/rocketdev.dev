import {get} from 'lodash';
import React from 'react';
import clsx from '../../utils/clsx';

interface RowProps {
  gutter?: [number, number];
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

        xs === 1 && 'xs:grid-cols-1',
        xs === 2 && 'xs:grid-cols-2',
        xs === 3 && 'xs:grid-cols-3',
        xs === 4 && 'xs:grid-cols-4',
        xs === 5 && 'xs:grid-cols-5',
        xs === 6 && 'xs:grid-cols-6',
        xs === 7 && 'xs:grid-cols-7',
        xs === 8 && 'xs:grid-cols-8',
        xs === 9 && 'xs:grid-cols-9',
        xs === 10 && 'xs:grid-cols-10',
        xs === 11 && 'xs:grid-cols-11',
        xs === 12 && 'xs:grid-cols-12',

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

        get(gutter, '[0]', false) && 'mx-1',
        get(gutter, '[0]', false) && 'mx-2',
        get(gutter, '[0]', false) && 'mx-3',
        get(gutter, '[0]', false) && 'mx-4',
        get(gutter, '[0]', false) && 'mx-5',
        get(gutter, '[0]', false) && 'mx-6',
        get(gutter, '[0]', false) && 'mx-7',
        get(gutter, '[0]', false) && 'mx-8',
        get(gutter, '[0]', false) && 'mx-9',
        get(gutter, '[0]', false) && 'mx-10',
        get(gutter, '[0]', false) && 'mx-11',
        get(gutter, '[0]', false) && 'mx-12',

        get(gutter, '[1]', false) && 'my-1',
        get(gutter, '[1]', false) && 'my-2',
        get(gutter, '[1]', false) && 'my-3',
        get(gutter, '[1]', false) && 'my-4',
        get(gutter, '[1]', false) && 'my-5',
        get(gutter, '[1]', false) && 'my-6',
        get(gutter, '[1]', false) && 'my-7',
        get(gutter, '[1]', false) && 'my-8',
        get(gutter, '[1]', false) && 'my-9',
        get(gutter, '[1]', false) && 'my-10',
        get(gutter, '[1]', false) && 'my-11',
        get(gutter, '[1]', false) && 'my-12'
      )}
    >
      {children}
    </div>
  );
};

export default Row;
