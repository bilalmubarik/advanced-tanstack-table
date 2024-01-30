import React from 'react';
import { DebouncedInput } from '../DebouncedInput';
import { Column, Table } from '@tanstack/react-table';

export const ColumnFilters = ({
  column,
  table
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === 'number' ? (
    <div>
      <div className="row">
        <div className="col-6">
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={(value: any) =>
              column.setFilterValue((old: [number, number]) => [
                value,
                old?.[1]
              ])
            }
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ''
            }`}
          />
        </div>
        <div className="col-6">
          <DebouncedInput
            type="number"
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={(value: any) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                value
              ])
            }
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ''
            }`}
          />
        </div>
      </div>
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option value={value} key={value} />
        ))}
      </datalist>
      <DebouncedInput
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={(value: any) => column.setFilterValue(value)}
        placeholder="Search..."
        list={column.id + 'list'}
      />
    </>
  );
};
