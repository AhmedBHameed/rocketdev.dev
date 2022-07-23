import React, {forwardRef} from 'react';
import theme from '../../styles/theme';
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
          'rounded-md',
          'shadow-sm',
          'placeholder-gray-500',
          'focus:outline-none',
          'sm:text-sm',
          'resize-y',
          className || '',
          theme.bgMain,
          theme.text,
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
