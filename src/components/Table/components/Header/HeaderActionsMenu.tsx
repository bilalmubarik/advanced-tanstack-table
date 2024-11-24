import React from 'react';
import { Table } from '@tanstack/react-table';
import { IconDotsVertical, IconEye } from '@tabler/icons-react';
import styled from 'styled-components';
import { TTableConfig } from '../../../../types';
import { ShowHideColumns } from './ShowHideColumns';

interface Props {
  table: Table<any>;
  config: TTableConfig;
}

const MenuButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

const DropdownMenuStyled = styled.ul<{ show: boolean }>`
  position: absolute;
  right: 0;
  z-index: 1000;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const HeaderActionsMenu = ({ table, config }: Props) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showHideColumns, setShowHideColumns] = React.useState<boolean>(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleDisplayHideColumnsModal = () => {
    setShowHideColumns(!showHideColumns);
  };

  return (
    <>
      <div className="dropdown">
        <MenuButtonStyled
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          onClick={handleMenuClick}
        >
          <IconDotsVertical size={20} />
        </MenuButtonStyled>
        <DropdownMenuStyled
          className="dropdown-menu"
          show={showMenu}
          aria-labelledby="dropdownMenuButton"
        >
          {config.isDisplayHideColumns && (
            <li className="">
              <button
                className="dropdown-item d-flex align-items-center gap-1"
                type="button"
                onClick={handleDisplayHideColumnsModal}
              >
                <IconEye size="18" className="mr-2" />{' '}
                <span>Column visibility</span>
              </button>
            </li>
          )}
        </DropdownMenuStyled>
      </div>
      <ShowHideColumns
        table={table}
        showHideColumns={showHideColumns}
        setShowHideColumns={setShowHideColumns}
      />
    </>
  );
};
