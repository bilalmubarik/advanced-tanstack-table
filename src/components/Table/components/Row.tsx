import { flexRender, Row as RowTanstack } from '@tanstack/react-table';
import { TableRowStyled, TableCellStyled } from '../../../styles/main';

type Props = {
  row: RowTanstack<any>;
  style?: any;
};

export const Row = (props: Props) => {
  const { row, style } = props;

  const handleRowClick = (event: React.MouseEvent) => {
    // Check if the target is a link, button, or any other element you want to disable row selection for
    const target = event.target as HTMLElement;
    if (
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.closest('.disable-select')
    ) {
      return;
    }
    row.getToggleSelectedHandler()(event);
  };

  return (
    <TableRowStyled
      key={row.id}
      style={style}
      className={row.getIsSelected() ? 'selected' : ''}
      onClick={handleRowClick}
    >
      {row.getVisibleCells().map((cell: any) => (
        <TableCellStyled
          key={cell.id}
          className={cell.column.id === 'action' ? 'disable-select' : ''}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCellStyled>
      ))}
    </TableRowStyled>
  );
};
