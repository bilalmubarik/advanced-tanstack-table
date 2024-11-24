import { Row as RowTanstack } from '@tanstack/react-table';
import { Row } from './Row';

type Props = {
  row: RowTanstack<any>;
};

export const PinnedRow = ({ row }: Props) => {
  return (
    <Row
      row={row}
      style={{
        backgroundColor: 'lightblue',
        position: 'sticky',
        top:
          row.getIsPinned() === 'top'
            ? `${row.getPinnedIndex() * 26 + 48}px`
            : undefined
      }}
    />
  );
};
