import React from 'react';

export const useApplyColumnVisibility = (tableConfig: any) => {
  const [columnVisibility, setColumnVisibility] = React.useState({});

  return {
    ...tableConfig,
    state: {
      ...tableConfig.state,
      columnVisibility
    },
    onColumnVisibilityChange: setColumnVisibility
  };
};
