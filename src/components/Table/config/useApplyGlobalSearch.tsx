import React from 'react';
import { getFilteredRowModel } from '@tanstack/react-table';

export const useApplyGlobalSearch = (tableConfig: any) => {
  const [globalFilter, setGlobalFilter] = React.useState('');

  return {
    ...tableConfig,
    state: {
      ...tableConfig.state,
      globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel()
  };
};
