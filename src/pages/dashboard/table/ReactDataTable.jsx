import DataTable from 'react-data-table-component';
import 'react-data-table-component-extensions/dist/index.css';
import '../../../assets/css/table.css';

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

import { data } from '../../../lib/mock-table-data';
import { useDashboardContext } from '../context/dashboard-context';

export const ReactDataTable = () => {
  const { openDialog } = useDashboardContext();
  // data provides access to your row data
  const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const handleChange = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Director',
      selector: 'director',
      sortable: true,
      cell: (d) => (
        <a href="https://google.com" target="_blank" className="dlink" rel="noreferrer">
          {d.director}
        </a>
      ),
    },
    {
      name: 'Genres',
      selector: 'genres',
      sortable: true,
      cell: (d) => <span>{d.genres.join(', ')}</span>,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
    },
    {
      name: 'Action',
      sortable: false,
      selector: 'null',
      cell: (row) => [
        <button
          key={`${row.title}3`}
          onClick={() => openDialog(row)}
          className="btn btn-sm btn-info"
        >
          Info
        </button>,
      ],
    },
  ];

  return (
    <div className="main">
      <DataTable
        columns={columns}
        data={data}
        noHeader
        defaultSortField="id"
        defaultSortAsc={true}
        pagination
        highlightOnHover
        dense
        selectableRows
        onSelectedRowsChange={handleChange}
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </div>
  );
};
