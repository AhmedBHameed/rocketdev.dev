import {MoonIcon, SunIcon} from '@heroicons/react/solid';
import {useTheme} from 'next-themes';
import React, {useCallback, useEffect, useState} from 'react';
import clsx from '../../utils/clsx';

const ThemeButton: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const {theme, setTheme} = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
  }, [theme, setTheme]);

  useEffect(() => {
    const isDark = theme === 'dark';
    setIsDark(isDark);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        'transition-colors',
        'dark:bg-gray-800',
        'dark:text-gray-400',
        'dark:hover:text-white',
        'text-gray-500',
        'hover:text-gray-600',
        'p-1',
        'rounded-full',
        'focus:outline-none'
      )}
    >
      {isDark ? (
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeButton;
