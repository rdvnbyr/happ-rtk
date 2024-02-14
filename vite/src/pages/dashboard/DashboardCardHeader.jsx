import {CardHeader} from 'react-bootstrap';

const DashboardCardHeader = ({title}) => {
  return (
    <CardHeader className="card-header">
      <h3 className="card-title">{title}</h3>
    </CardHeader>
  );
};

export default DashboardCardHeader;
