import React from 'react';
import { RowPinningState } from '@tanstack/react-table';
import { TTableConfig } from '../../../types';

type Props = {
  tableConfig: any;
  config: TTableConfig;
};

export const useApplyRowActions = (props: Props) => {
  const { tableConfig, config } = props;

  const [rowPinning, setRowPinning] = React.useState<RowPinningState>({
    top: []
  });

  return {
    ...tableConfig,
    columns: [
      ...tableConfig.columns,
      {
        id: 'actions',
        cell: ({ row }: any) => {
          return (
            <div style={{ display: 'flex', gap: '4px' }}>
              {config.actions?.pinning &&
                (row.getIsPinned() ? (
                  <button onClick={() => row.pin(false, true, false)}>
                    ❌
                  </button>
                ) : (
                  <button onClick={() => row.pin('top', true, false)}>
                    ⬆️
                  </button>
                ))}
              {config.actions?.editing && (
                <button onClick={() => console.log('Edit row', row.id)}>
                  ✏️
                </button>
              )}
              {config.actions?.deleting && (
                <button onClick={() => console.log('Delete row', row.id)}>
                  🗑️
                </button>
              )}
            </div>
          );
        }
      }
    ],
    state: {
      ...tableConfig.state,
      rowPinning
    },
    onRowPinningChange: setRowPinning,
    keepPinnedRows: true
  };
};
