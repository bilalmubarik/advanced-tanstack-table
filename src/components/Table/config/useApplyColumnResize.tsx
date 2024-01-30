import React from 'react';
import { ColumnResizeMode } from '@tanstack/react-table';

export const useApplyColumnResize = (tableConfig: any) => {
  const [columnResizeMode, setColumnResizeMode] =
    React.useState<ColumnResizeMode>('onChange');

  return {
    ...tableConfig,
    state: {
      ...tableConfig.state,
      columnResizeMode
    },
    columnResizeMode
  };
};
