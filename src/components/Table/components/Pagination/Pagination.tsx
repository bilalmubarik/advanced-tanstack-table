import {
  IconChevronLeft,
  IconChevronsLeft,
  IconChevronRight,
  IconChevronsRight
} from '@tabler/icons-react';
import cx from 'classnames';

export const Pagination = ({ table }: any) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <select
          id="pageSizeSelect"
          className="form-select form-select-sm"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 25, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>
        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li
              className={cx('page-item', {
                disabled: !table.getCanPreviousPage()
              })}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => table.setPageIndex(0)}
              >
                <IconChevronsLeft size={18} />
              </a>
            </li>
            <li
              className={cx('page-item', {
                disabled: !table.getCanPreviousPage()
              })}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => table.previousPage()}
              >
                <IconChevronLeft size={18} />
              </a>
            </li>
            <li className="d-flex">
              <input
                min={1}
                max={table.getPageCount()}
                type="number"
                value={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="form-control form-control-sm border-start-0 rounded-0"
              />
            </li>
            <li className="d-flex align-items-center mx-2">
              of {table.getPageCount()}
            </li>
            <li
              className={cx('page-item', { disabled: !table.getCanNextPage() })}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => table.nextPage()}
              >
                <IconChevronRight size={18} />
              </a>
            </li>
            <li
              className={cx('page-item', { disabled: !table.getCanNextPage() })}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              >
                <IconChevronsRight size={18} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
