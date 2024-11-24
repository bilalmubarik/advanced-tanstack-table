import React from 'react';
import styled from 'styled-components';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
  icon?: React.ReactNode;
}

const InputContainerStyled = styled.div`
  position: relative;
  width: 100%;
`;

const InputIconStyled = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #757575;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 8px 8px 8px 32px; /* Adjust padding to make space for the icon */
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-bottom: 2px solid #3f51b5;
    padding-bottom: 6px; /* Adjust for the extra border width */
  }
`;

export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  icon,
  ...props
}: Props) => {
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

  return (
    <InputContainerStyled>
      {icon && <InputIconStyled>{icon}</InputIconStyled>}
      <InputStyled
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        {...props}
      />
    </InputContainerStyled>
  );
};
