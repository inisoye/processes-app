import React from 'react';
import { format } from 'date-fns';

import Header from '../components/Header';
import HeaderAndTopbarWrapper from '../components/HeaderAndTopbarWrapper';
import Logobar from '../components/Logobar';
import Topbar from '../components/Topbar';
import TableWithSidebar from '../components/TableWithSidebar';
import StatusPill from '../components/StatusPill';

import useProcesses from '../hooks/useProcesses';

function sidebarDataReducer(state, action) {
  const { type, data } = action;
  switch (type) {
    case 'populate': {
      return data;
    }

    case 'depopulate': {
      return {};
    }

    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}

function Processes() {
  const { isLoading, error, isError, data } = useProcesses();

  const [sidebarDataState, dispatchSidebarData] = React.useReducer(
    sidebarDataReducer,
    {}
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Process Name',
        accessor: 'processName',
        id: 'count_col',
        width: '40%',
      },
      {
        Header: 'Steps',
        accessor: 'stepsCount',
        id: 'steps_col',
        width: '15%',
      },
      {
        Header: 'Created By',
        accessor: 'creator',
        id: 'creator_col',
        width: '15%',
      },
      {
        Header: 'Last Updated',
        accessor: (row) => new Date(row.dateUpdated),
        Cell: ({ value }) => format(value, 'dd/MM/yyy, hh:mm aa'),
        id: 'date_col',
        sortType: 'datetime',
        width: '20%',
      },
    ],
    []
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <>
        <p>There was an error</p>
        <pre>{error}</pre>
      </>
    );
  }

  return (
    <div>
      <HeaderAndTopbarWrapper>
        <Header />
        <Logobar />
        <Topbar />
      </HeaderAndTopbarWrapper>

      <TableWithSidebar
        columns={columns}
        data={data}
        sidebarDataState={sidebarDataState}
        dispatchSidebarData={dispatchSidebarData}
        StatusPill={StatusPill}
        showActionButtons={true}
      />
    </div>
  );
}

export default Processes;
