import { ReactDataTable } from './table/ReactDataTable';
import { DashboardProvider } from './context/dashboard-context';
import DashboardCardHeader from './DashboardCardHeader';
import { Card } from 'react-bootstrap';
import TableContentInfo from './table/TableContentInfo';

export const Dashboard = () => {
  return (
    <DashboardProvider>
      <Card className="card">
        <DashboardCardHeader title="React Data Table" />

        <ReactDataTable />
      </Card>

      {/* Dialogs */}
      <TableContentInfo />
    </DashboardProvider>
  );
};
