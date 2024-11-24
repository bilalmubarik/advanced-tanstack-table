import React from 'react';
import { RowPinningState } from '@tanstack/react-table';

export const useApplyRowPinning = (tableConfig: any) => {
  const [rowPinning, setRowPinning] = React.useState<RowPinningState>({
    top: []
  });

  return {
    ...tableConfig,
    columns: [
      {
        id: 'pin',
        cell: ({ row }: any) =>
          row.getIsPinned() ? (
            <button onClick={() => row.pin(false, true, false)}>❌</button>
          ) : (
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => row.pin('top', true, false)}>⬆️</button>
            </div>
          )
      },
      ...tableConfig.columns
    ],
    state: {
      ...tableConfig.state,
      rowPinning
    },
    onRowPinningChange: setRowPinning,
    keepPinnedRows: true
  };
};
