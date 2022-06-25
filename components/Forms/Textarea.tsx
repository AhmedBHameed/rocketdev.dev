import React, {forwardRef} from 'react';
import clsx from '../../utils/clsx';

interface TextareaProps {
  id?: string;
  className?: string;
  error?: boolean;
  value: string;
  rows?: number;
  ariaLabel?: string;
  name?: string;
  placeholder?: string;
  testId?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      id,
      testId,
      name,
      placeholder,
      ariaLabel,
      rows,
      error,
      value,
      onChange,
      onInput,
    },
    ref
  ) => {
    return (
      <textarea
        id={id}
        aria-label={ariaLabel}
        name={name}
        data-testid={testId}
        rows={rows}
        ref={ref}
        placeholder={placeholder}
        className={clsx(
          'appearance-none',
          'block',
          'w-full',
          'px-2',
          'py-1',
          'border-2',
          'border-gray-300',
          'rounded-md',
          'shadow-sm',
          'dark:bg-zinc-400',
          'bg-zinc-200',
          'placeholder-gray-500',
          'focus:outline-none',
          'focus:ring-blue-500',
          'sm:text-sm',
          className || '',
          error ? 'border-red-500' : ''
        )}
        onChange={onChange}
        onInput={onInput}
        value={value}
      />
    );
  }
);

export default Textarea;
