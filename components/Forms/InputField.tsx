import {ExclamationCircleIcon} from '@heroicons/react/solid';
import React, {forwardRef} from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';

interface TextInputProps {
  id?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  type?: 'text' | 'number' | 'password';
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId?: string;
  ariaLabel: string;
  error?: boolean;
  maxLength?: number;
  min?: number;
  className?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      id,
      name,
      disabled,
      type,
      placeholder,
      value,
      error,
      min,
      onChange,
      testId,
      maxLength,
      ariaLabel,
      className,
      onKeyDown,
    },
    ref
  ) => (
    <div className="relative rounded-md shadow-sm">
      <input
        id={id}
        ref={ref}
        type={type || 'text'}
        autoComplete="email"
        name={name}
        disabled={disabled}
        data-testid={testId}
        className={clsx(
          'appearance-none',
          'block',
          'w-full',
          'px-2',
          'py-1',
          'border-2',
          'rounded-md',
          'shadow-sm',
          'placeholder-gray-500',
          'focus:outline-none',
          'sm:text-sm',
          className,
          theme.bgMain,
          theme.text,
          error ? 'border-red-500' : ''
        )}
        aria-label={ariaLabel}
        maxLength={maxLength}
        min={min}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        {error && (
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
);

export default TextInput;
