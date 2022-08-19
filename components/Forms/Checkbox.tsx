import React, {forwardRef} from 'react';
import clsx from '../../utils/clsx';

interface CheckboxProps {
  id?: string;
  label?: React.ReactNode;
  subLabel?: React.ReactNode;
  value?: boolean;
  className?: string;
  labelClassName?: string;
  error?: string;
  ariaLabel: string;
  testId?: string;
  onChange?: (event?: boolean) => void;
  name?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      ariaLabel,
      subLabel,
      className,
      labelClassName,
      error,
      id,
      label,
      onChange,
      testId,
      name,
      value,
    },
    ref
  ) => (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          ref={ref}
          id={id}
          aria-describedby={ariaLabel}
          name={name}
          type="checkbox"
          className={clsx(
            className || '',
            'h-4',
            'w-4',
            'rounded',
            'accent-red-400',
            error ? 'shadow-[0_0_0_1px_rgba(255,0,0,1)]' : ''
          )}
          checked={value}
          onChange={(event) => onChange?.(event.target.checked)}
          data-testid={testId}
        />
      </div>
      <div className="text-sm">
        <label
          htmlFor={id}
          className={clsx(labelClassName || '', 'font-medium')}
        >
          {label}
        </label>
        {subLabel && (
          <p id="comments-description" className="text-gray-50">
            {subLabel}
          </p>
        )}
      </div>
    </div>
  )
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
