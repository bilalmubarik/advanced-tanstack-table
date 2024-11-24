import { Table } from '@tanstack/react-table';
import { HeaderGlobalSearch } from './HeaderGlobalSearch';
import { HeaderActionsMenu } from './HeaderActionsMenu';
import styled from '@emotion/styled';
import { TTableConfig } from '../../../../types';

interface Props {
  table: Table<any>;
  config: TTableConfig;
}

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.8rem;
  border-bottom: 1px solid #dee2e6;
`;

export const Header = ({ table, config }: Props) => {
  return (
    <HeaderStyled>
      {config?.isDisplayGlobalSearch && <HeaderGlobalSearch table={table} />}
      <HeaderActionsMenu table={table} config={config} />
    </HeaderStyled>
  );
};
