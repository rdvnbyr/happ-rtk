import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import '../assets/css/table.css';

// A super simple expandable component.
// const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

import {columns, data} from '../lib/mock-table-data';

export const ReactDataTable = () => {
  const tableData = {
    columns,
    data,
  };

  // data provides access to your row data
  const ExpandedComponent = ({data}) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  const handleChange = ({selectedRows}) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', selectedRows);
  };
  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
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
      </DataTableExtensions>
    </div>
  );
};
