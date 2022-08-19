import {EyeIcon, EyeOffIcon} from '@heroicons/react/solid';
import React, {forwardRef, useState} from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';

interface PasswordFieldProps {
  id?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId?: string;
  ariaLabel: string;
  error?: boolean;
  maxLength?: number;
  min?: number;
  className?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  rtl?: boolean;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    {
      id,
      name,
      disabled,
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
      rtl,
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="relative rounded-md shadow-sm">
        <input
          id={id}
          ref={ref}
          type={isVisible ? 'text' : 'password'}
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
            'placeholder-gray-500',
            'rounded-md',
            'shadow-sm',
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

        <button
          onClick={() => setIsVisible((state) => !state)}
          type="button"
          className={clsx(
            'absolute',
            'cursor-pointer',
            'z-10',
            'inset-y-0',
            `${rtl ? 'left' : 'right'}-0`,
            'px-3',
            'flex',
            'items-center',
            'text-gray-50'
          )}
        >
          {!isVisible ? (
            <EyeOffIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';

export default PasswordField;
