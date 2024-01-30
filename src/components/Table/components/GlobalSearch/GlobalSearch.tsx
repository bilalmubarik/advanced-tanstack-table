import { IconX } from '@tabler/icons-react';
import { DebouncedInput } from '../DebouncedInput';

export const GlobalSearch = (table: any) => {
  return (
    <div className="d-flex">
      <DebouncedInput
        placeholder="Search"
        value={table.getState().globalFilter || ''}
        onChange={(value: string) => table.setGlobalFilter(value)}
        icon={
          <IconX size={18} onClick={() => table.setGlobalFilter(undefined)} />
        }
      />
    </div>
  );
};
