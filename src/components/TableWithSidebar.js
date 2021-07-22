import React from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import VisuallyHidden from '@reach/visually-hidden';
import tw, { styled } from 'twin.macro';

import TableSidebar from './TableSidebar';

import useDialogControl from '../hooks/useDialogControl';

import TableArrowUp from '../icons/TableArrowUp';
import TableArrowDown from '../icons/TableArrowDown';
import TableSearch from '../icons/TableSearch';

const StyledTableContainer = styled.div`
  max-width: 1110px;

  ${tw`w-full p-6 m-auto md:px-16`};
`;

const StyledTableFilter = tw.form`flex items-center space-x-2.5 mb-4 px-4 border border-chevyBlue-dark border-opacity-10 rounded focus-within:ring-4 focus-within:ring-chevyTeal-light focus-within:border-chevyTeal transition duration-500 ease-in-out`;

const StyledFilterInput = tw.input`py-3 pb-3.5 w-full focus:outline-none text-sm`;

const StyledTable = tw.table`w-full`;

const StyledTableHeading = tw.th`py-4 pl-2 border-b border-chevyBlue-dark border-opacity-10 hover:bg-chevyTeal-light hover:bg-opacity-60 transition duration-500 ease-in-out`;

const StyledTableHeadingWrapper = tw.div`text-left text-xs flex items-center space-x-1.5 font-normal text-opacity-70`;

const StyledTableHeadingText = tw.span`text-chevyBlue-dark text-opacity-70`;

const StyledTableDataRow = tw.tr`hover:bg-chevyTeal-light hover:bg-opacity-60 cursor-pointer transition duration-500 ease-in-out`;

const StyledTableDataCell = tw.td`py-4 pl-2 border-b border-chevyBlue-dark border-opacity-10 text-sm`;

/**
 * Component renders a table built with the react-table library.
 * Each row in table is clickable.
 * When clicked, a row's data is expanded into a sidebar built with Reach UI's Dialog component.
 */

function TableWithSidebar({
  columns,
  data,
  sidebarDataState,
  dispatchSidebarData,
  showActionButtons,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: tableState,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = tableState;

  const { isDialogOpen, openDialog, closeDialog } = useDialogControl();

  const handleRowClick = (row) => {
    // Popluate sidebar with clicked row's data.
    dispatchSidebarData({ type: 'populate', data: row.original });
    openDialog();
  };

  const handleSidebarClose = () => {
    // Clear sidebar when it is closed.
    dispatchSidebarData({ type: 'depopulate' });
    closeDialog();
  };

  return (
    <StyledTableContainer>
      <StyledTableFilter>
        <TableSearch />

        <StyledFilterInput
          type="search"
          placeholder="Search"
          value={globalFilter}
          onChange={({ target }) => setGlobalFilter(target.value)}
        />
      </StyledTableFilter>

      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableHeading
                  css={`
                    width: ${column.width};
                  `}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <StyledTableHeadingWrapper>
                    <StyledTableHeadingText>
                      {column.render('Header')}
                    </StyledTableHeadingText>

                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <>
                          <span aria-hidden>
                            <TableArrowDown />
                          </span>
                          <VisuallyHidden>(Descending Order)</VisuallyHidden>
                        </>
                      ) : (
                        <>
                          <span aria-hidden>
                            <TableArrowUp />
                          </span>
                          <VisuallyHidden>(Ascending Order)</VisuallyHidden>
                        </>
                      )
                    ) : (
                      ''
                    )}
                  </StyledTableHeadingWrapper>
                </StyledTableHeading>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <StyledTableDataRow
                {...row.getRowProps()}
                onClick={() => handleRowClick(row)}
              >
                {row.cells.map((cell) => {
                  return (
                    <StyledTableDataCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </StyledTableDataCell>
                  );
                })}
              </StyledTableDataRow>
            );
          })}
        </tbody>
      </StyledTable>

      <TableSidebar
        sidebarDataState={sidebarDataState}
        isDialogOpen={isDialogOpen}
        handleSidebarClose={handleSidebarClose}
        showActionButtons={showActionButtons}
      />
    </StyledTableContainer>
  );
}

export default TableWithSidebar;
