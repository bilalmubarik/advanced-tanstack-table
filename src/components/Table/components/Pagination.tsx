import TablePagination from '@mui/material/TablePagination';

export const Pagination = ({ table }: any) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    table.setPageIndex(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    table.setPageSize(parseInt(event.target.value, 10));
  };

  return (
    <TablePagination
      component="div"
      count={table.getPageCount()}
      page={table.getState().pagination.pageIndex}
      onPageChange={handleChangePage}
      rowsPerPage={table.getState().pagination.pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
