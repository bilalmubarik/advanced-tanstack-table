import { flexRender } from '@tanstack/react-table';
import { type TTableConfig } from '../../../types';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import { ColumnFilters } from '.';
import { TableHeaderStyled, TableHeaderCellStyled } from '../../../styles/main';

type Props = {
  table: any;
  config: TTableConfig;
};

export const TableHeader = (props: Props) => {
  const { table, config } = props;

  return (
    <TableHeaderStyled>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <TableHeaderCellStyled
              key={header.id}
              {...{
                colSpan: header.colSpan,
                style: {
                  width: header.getSize()
                }
              }}
            >
              {header.isPlaceholder ? null : (
                <>
                  <div
                    {...(config?.isDisplaySorting && {
                      className: header.column.getCanSort() ? 'pointer' : '',
                      onClick: header.column.getToggleSortingHandler()
                    })}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {(config?.isDisplaySorting &&
                      {
                        asc: <IconArrowUp size="15" />,
                        desc: <IconArrowDown size="15" />
                      }[header.column.getIsSorted() as string]) ??
                      null}
                  </div>
                  {config?.isDisplayColumnResize && (
                    <div
                      {...{
                        onDoubleClick: () => header.column.resetSize(),
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        className: `resizer ${
                          table.options.columnResizeDirection
                        } ${header.column.getIsResizing() ? 'isResizing' : ''}`
                      }}
                    />
                  )}
                  {config?.isDisplayColumnFiltering &&
                  header.column.getCanFilter() ? (
                    <div>
                      <ColumnFilters column={header.column} table={table} />
                    </div>
                  ) : null}
                </>
              )}
            </TableHeaderCellStyled>
          ))}
        </tr>
      ))}
    </TableHeaderStyled>
  );
};
