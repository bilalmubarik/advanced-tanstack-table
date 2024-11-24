import { Table } from '@tanstack/react-table';
import { IconSearch } from '@tabler/icons-react';
import { DebouncedInput } from '../Form/DebouncedInput';

interface Props {
  table: Table<any>;
}

export const HeaderGlobalSearch = ({ table }: Props) => {
  return (
    <DebouncedInput
      value={table.getState().globalFilter || ''}
      onChange={(value: string) => table.setGlobalFilter(value)}
      icon={<IconSearch size={20} />}
      placeholder="Search"
    />
  );
};
