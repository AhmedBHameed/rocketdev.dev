import React, {forwardRef} from 'react';
import clsx from '../../utils/clsx';

interface TextareaProps {
  className?: string;
  error?: boolean;
  value: string;
  rows?: number;
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, rows, error, value, onInput}, ref) => {
    return (
      <textarea
        id="about"
        name="about"
        rows={rows}
        ref={ref}
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
        onInput={onInput}
        placeholder="you@example.com"
        value={value}
      />
    );
  }
);

export default Textarea;
