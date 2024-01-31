import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from '@tanstack/react-table';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import { type TJob, type TTableConfig } from '../../types';
import {
  ShowHideColumns,
  Pagination,
  GlobalSearch,
  ColumnFilters
} from './components';
import { useApplyGlobalSearch } from './config/useApplyGlobalSearch';
import { useApplyColumnVisibility } from './config/useApplyColumnVisibility';
import { useApplyColumnResize } from './config/useApplyColumnResize';
import { useApplySorting } from './config/useApplySorting';
import { useApplyColumnFiltering } from './config/useApplyColumnFiltering';
import './Table.scss';

interface TableProps {
  columns: any;
  data: TJob[];
  config?: TTableConfig;
}

const defaultConfig = {
  isDisplayGlobalSearch: true,
  isDisplayHideColumns: true,
  isDisplayColumnResize: true,
  isDisplaySorting: true,
  isDisplayColumnFiltering: true
};

export const Table = ({ columns, data, config = {} }: TableProps) => {
  config = { ...defaultConfig, ...config };

  const [defaultColumns] = React.useState<typeof columns>(() => [...columns]);

  let tableConfig = {
    data,
    columns: defaultColumns,
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    state: {},
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  };

  if (config?.isDisplayGlobalSearch) {
    tableConfig = useApplyGlobalSearch(tableConfig);
  }
  if (config?.isDisplayHideColumns) {
    tableConfig = useApplyColumnVisibility(tableConfig);
  }
  if (config?.isDisplayColumnResize) {
    tableConfig = useApplyColumnResize(tableConfig);
  }
  if (config?.isDisplaySorting) {
    tableConfig = useApplySorting(tableConfig);
  }
  if (config?.isDisplayColumnFiltering) {
    tableConfig = useApplyColumnFiltering(tableConfig);
  }

  const table = useReactTable(tableConfig);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between">
        {config?.isDisplayGlobalSearch && <GlobalSearch {...table} />}
        {config?.isDisplayHideColumns && <ShowHideColumns {...table} />}
      </div>
      <div className="row mt-3">
        <div className="col">
          <table className="table table-bordered table-striped table-responsive">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      {...{
                        colSpan: header.colSpan,
                        style: {
                          width: header.getSize()
                        }
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...(config?.isDisplaySorting && {
                            className: header.column.getCanSort()
                              ? 'pointer'
                              : ''
                          })}
                        >
                          <span
                            className="d-block mb-1"
                            onClick={header.column.getToggleSortingHandler()}
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
                          </span>
                          {config?.isDisplayColumnResize && (
                            <div
                              {...{
                                onDoubleClick: () => header.column.resetSize(),
                                onMouseDown: header.getResizeHandler(),
                                onTouchStart: header.getResizeHandler(),
                                className: `resizer ${
                                  table.options.columnResizeDirection
                                } ${
                                  header.column.getIsResizing()
                                    ? 'isResizing'
                                    : ''
                                }`
                              }}
                            />
                          )}
                          {config?.isDisplayColumnFiltering &&
                          header.column.getCanFilter() ? (
                            <div>
                              <ColumnFilters
                                column={header.column}
                                table={table}
                              />
                            </div>
                          ) : null}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
        <Pagination table={table} />
      </div>
    </div>
  );
};
