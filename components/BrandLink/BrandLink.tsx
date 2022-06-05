import React from 'react';
import clsx from '../../utils/clsx';
import RocketDevsSvg from '../SVG/ReactDevsSvg';

const BrandLink = () => {
  return (
    <a href="#" className={clsx('flex', 'items-center', 'w-full')}>
      <RocketDevsSvg className={clsx('h-10', 'w-10')} />
      <article className="prose md:prose-md">
        <h2 className="ml-3 dark:text-gray-100 italic">Rocket Dev</h2>
      </article>
    </a>
  );
};

export default BrandLink;
