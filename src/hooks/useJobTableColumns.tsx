import { createColumnHelper } from '@tanstack/react-table';
import { captilizeFirstLetter } from '../utils';
import { type TJob } from '../types';

export const useJobTableColumns = () => {
  const columnHelper = createColumnHelper<TJob>();

  return [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('description', {
      header: () => 'Description',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('salary', {
      header: () => 'Salary',
      cell: (info) => info.renderValue(),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('salaryType', {
      header: () => <span>Salary Type</span>,
      cell: (info) => captilizeFirstLetter(info.getValue()),
      footer: (info) => info.column.id
    }),
    columnHelper.accessor('location', {
      header: 'Location',
      footer: (info) => info.column.id
    })
  ];
};
