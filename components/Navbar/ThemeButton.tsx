import {useTheme} from 'next-themes';
import React, {useCallback, useEffect, useState} from 'react';
import clsx from '../../utils/clsx';
import {Sun, Moon} from 'react-feather';
import palette from '../../styles/theme';

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
        'rounded-full',
        'focus:outline-none',
        'h-8',
        'w-8',
        'p-1',
        palette.text,
        palette.bgSecondary
      )}
    >
      {isDark ? (
        <Sun className="h-full w-full" aria-hidden="true" />
      ) : (
        <Moon className="h-full w-full" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeButton;
