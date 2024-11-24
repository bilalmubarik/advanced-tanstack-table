import React, { useMemo, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DebouncedInput } from '../Form/DebouncedInput';

interface Props {
  table: any;
  showHideColumns: boolean;
  setShowHideColumns: (showHideColumns: boolean) => void;
}

const CardStyled = styled.div`
  font-size: 1rem;
  position: absolute;
  top: 123px;
  left: 0;
`;

const SearchContainerStyled = styled.div`
  padding-bottom: 8px;
  margin-bottom: 10px;
`;

const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItemStyled = styled.li`
  padding: 2px 0;
`;

const ListItemLabelStyled = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxStyled = styled.input`
  transform: scale(1.3);
  margin-right: 8px;
`;

const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid #ddd;
  margin-top: 16px;
`;

const ResetButtonStyled = styled.button`
  background: none;
  border: none;
  color: #757575;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const ShowHideColumns = ({
  table,
  showHideColumns,
  setShowHideColumns
}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formattedOptions = useMemo(() => {
    return table.getAllLeafColumns().map((column: any) => ({
      label: column.id,
      value: column.id
    }));
  }, [table]);

  const filteredOptions = useMemo(() => {
    return formattedOptions.filter((option: any) =>
      option.label.includes(searchTerm)
    );
  }, [formattedOptions, searchTerm]);

  const handleCheckboxChange = (value: string) => {
    const column = table.getColumn(value);
    column.toggleVisibility(!column.getIsVisible());
  };

  const handleReset = () => {
    table.getAllLeafColumns().forEach((column: any) => {
      column.toggleVisibility(true);
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShowHideColumns(false);
    }
  };

  if (!showHideColumns) {
    return null;
  }

  return (
    <CardStyled ref={ref} className="card">
      <div className="card-body">
        <SearchContainerStyled>
          <DebouncedInput
            value={searchTerm}
            onChange={setSearchTerm}
            icon={<SearchOutlinedIcon />}
            placeholder="Search"
          />
        </SearchContainerStyled>
        <ListStyled>
          {filteredOptions.map((option: any) => (
            <ListItemStyled key={option.value}>
              <ListItemLabelStyled>
                <CheckboxStyled
                  type="checkbox"
                  checked={table.getColumn(option.value).getIsVisible()}
                  onChange={() => handleCheckboxChange(option.value)}
                />
                {option.label}
              </ListItemLabelStyled>
            </ListItemStyled>
          ))}
        </ListStyled>
        <ButtonContainerStyled>
          <ResetButtonStyled type="button" onClick={handleReset}>
            RESET
          </ResetButtonStyled>
        </ButtonContainerStyled>
      </div>
    </CardStyled>
  );
};
