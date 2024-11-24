export interface TTableConfig {
  isDisplayHideColumns?: boolean;
  isDisplayGlobalSearch?: boolean;
  isDisplayColumnResize?: boolean;
  isDisplaySorting?: boolean;
  isDisplayColumnFiltering?: boolean;
  isDisplayRowSelection?: boolean;
  isDisplayRowPinning?: boolean;
  actions?: {
    pinning?: boolean;
    editing?: boolean;
    deleting?: boolean;
  };
  // isDisplayPagination?: boolean;
  // isDisplayRefresh?: boolean;
  // isDisplayRowSelect?: boolean;
  // isDisplayRowExpand?: boolean;
  // isDisplayRowDetails?: boolean;
  // isDisplayRowEdit?: boolean;
}
