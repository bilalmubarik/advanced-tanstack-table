import React from 'react';
import { ColumnFiltersState, getFilteredRowModel } from '@tanstack/react-table';

export const useApplyColumnFiltering = (tableConfig: any) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  return {
    ...tableConfig,
    state: {
      ...tableConfig.state,
      columnFilters
    },
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel()
  };
};
