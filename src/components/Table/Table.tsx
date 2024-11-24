import React from 'react';
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from '@tanstack/react-table';
import TableBody from '@mui/material/TableBody';

import { type TJob, type TTableConfig } from '../../types';
import { Pagination, Row, Header, PinnedRow, TableHeader } from './components';
import { useApplyGlobalSearch } from './config/useApplyGlobalSearch';
import { useApplyColumnVisibility } from './config/useApplyColumnVisibility';
import { useApplyColumnResize } from './config/useApplyColumnResize';
import { useApplySorting } from './config/useApplySorting';
import { useApplyColumnFiltering } from './config/useApplyColumnFiltering';
import { useApplyRowPinning } from './config/useApplyRowPinning';
import { useRowSelection } from './config/useRowSelection';
import { useApplyRowActions } from './config/useApplyRowActions';
import './Table.scss';
import {
  TableContainerStyled,
  TableStyled,
  FooterStyled,
  TableRowStyled,
  TableCellStyled,
  TableHeaderCellStyled
} from '../../styles/main';

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
  isDisplayColumnFiltering: false,
  isDisplayRowPinning: true,
  isDisplayRowSelection: true,
  actions: {
    pinning: true,
    editing: true,
    deleting: true
  }
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
  if (config?.isDisplayRowSelection) {
    tableConfig = useRowSelection(tableConfig);
  }
  if (config?.isDisplayRowPinning) {
    tableConfig = useApplyRowActions({ tableConfig, config });
  }

  const table = useReactTable(tableConfig);
  return (
    <TableContainerStyled>
      <Header table={table} config={config} />
      <TableStyled>
        <TableHeader table={table} config={config} />
        <tbody>
          {table.getTopRows().map((row) => (
            <PinnedRow key={row.id} row={row} />
          ))}
          {table.getCenterRows().map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </tbody>
      </TableStyled>
      <FooterStyled>
        <Pagination table={table} />
      </FooterStyled>
    </TableContainerStyled>
  );
};
