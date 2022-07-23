import React from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';

export type Option = {
  key?: string | number;
  value: string | number;
  label: string | number;
};

interface SelectMenuProps {
  options: Option[];
  value: string;
  id?: string;
  error?: boolean;
  name?: string;
  placeholder?: string;
  testId?: string;
  onChange?: (selected: string) => void;
  className?: string;
}

const SelectMenu = ({
  value,
  id,
  options,
  error,
  name,
  placeholder,
  className,
  testId,
  onChange,
}: SelectMenuProps) => {
  return (
    <select
      id={id}
      data-testid={testId}
      placeholder={placeholder}
      className={clsx(
        'mt-1',
        'block',
        'w-full',
        'pl-1',
        'pr-10',
        'py-1',
        'border-2',
        'text-base',
        'focus:outline-none',
        'rounded-md',
        'shadow-sm',
        'placeholder-gray-500',
        'focus:outline-none',
        'sm:text-sm',
        'rounded-md',
        className,
        theme.bgMain,
        theme.text,
        error ? 'border-red-500' : ''
      )}
      name={name}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.key || option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectMenu;
