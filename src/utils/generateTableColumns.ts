import { createColumnHelper } from '@tanstack/react-table';

export const generateTableColumns = (columnsJson: any) => {
  const columnHelper = createColumnHelper<any>();

  const columns = columnsJson.map(({ id, title, size }: any) => {
    return columnHelper.accessor(id, {
      header: () => title,
      cell: (info) => info.getValue(),
      size: size
    });
  });

  return columns;
};
