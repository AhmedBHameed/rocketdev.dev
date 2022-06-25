import React from 'react';
import clsx from '../../utils/clsx';

interface FormControlProps {
  label?: React.ReactNode;
  className?: string;
  error?: string;
  hideErrorPlaceholder?: boolean;
  htmlFor?: string;
  helperTextId?: string;
  children?: React.ReactNode;
}

const FormControl: React.FC<FormControlProps> = ({
  children,
  className,
  label,
  error,
  htmlFor,
  hideErrorPlaceholder,
  helperTextId,
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={clsx(
            'block',
            'text-sm',
            'font-medium',
            'text-gray-50',
            'mb-1'
          )}
        >
          {label}
        </label>
      )}
      {children}
      {!hideErrorPlaceholder && (
        <small
          data-testid={error ? 'input-error' : ''}
          className="mt-2 text-sm text-red-600"
          id={helperTextId}
        >
          {error ? error : <>&nbsp;</>}
        </small>
      )}
    </div>
  );
};
export default FormControl;
