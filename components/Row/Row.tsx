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
        xs && `grid-cols-${xs}`,
        sm && `sm:grid-cols-${sm}`,
        md && `md:grid-cols-${md}`,
        lg && `lg:grid-cols-${lg}`,
        xl && `xl:grid-cols-${xl}`,
        xxl && `2xl:grid-cols-${xxl}`,
        gap && `gap-${gap}`,
        gutter?.[0] && `mx-${gutter[0]}`,
        gutter?.[1] && `my-${gutter[1]}`
      )}
    >
      {children}
    </div>
  );
};

export default Row;
