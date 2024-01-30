import React from 'react';
import cx from 'classnames';
import './DebouncedInput.scss';

export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  className,
  icon,
  ...props
}: {
  value: string | number;
  onChange: any;
  debounce?: number;
  className?: string;
  icon?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return icon ? (
    <div className="input-group">
      <input
        type="text"
        className={cx('form-control', className)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
      <span className="icon">{icon}</span>
    </div>
  ) : (
    <input
      {...props}
      className={cx('form-control form-control-sm', className)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
