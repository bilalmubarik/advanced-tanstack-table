import React from 'react';
import { SortingState, getSortedRowModel } from '@tanstack/react-table';

export const useApplySorting = (tableConfig: any) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  return {
    ...tableConfig,
    state: {
      ...tableConfig.state,
      sorting
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel()
  };
};
