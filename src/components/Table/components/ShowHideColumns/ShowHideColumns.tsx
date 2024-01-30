import { useMemo } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import './ShowHideColumns.scss';
import { IconEye } from '@tabler/icons-react';

export const ShowHideColumns = (table: any) => {
  const formattedOptions = useMemo(() => {
    return table.getAllLeafColumns().map((column: any) => ({
      label: column.id,
      value: column.id
    }));
  }, [table]);

  const selectedValues = useMemo(() => {
    return formattedOptions.filter(({ value }: any) =>
      table.getColumn(value).getIsVisible()
    );
  }, [formattedOptions, table]);

  const handleSelect = (selectedOptions: any) => {
    formattedOptions.forEach((option: any) => {
      const isSelected = selectedOptions.some(
        (selected: any) => selected.value === option.value
      );
      const column = table.getColumn(option.value);

      if (isSelected !== column.getIsVisible()) {
        column.toggleVisibility();
      }
    });
  };

  return (
    <MultiSelect
      className="multiselect"
      labelledBy="Select"
      options={formattedOptions}
      value={selectedValues}
      onChange={handleSelect}
      hasSelectAll={false}
      ClearSelectedIcon={null}
      valueRenderer={() => {
        return (
          <div className="d-flex align-items-center">
            <IconEye size={18} />
            &nbsp;<span>Columns</span>
          </div>
        );
      }}
    />
  );
};
