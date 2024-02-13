import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDashboardContext} from '../context/dashboard-context';

function TableContentInfo() {
  const dashboardContext = useDashboardContext();
  const {showDialog, closeDialog, data} = dashboardContext;
  return (
    <>
      <Modal show={showDialog} onHide={closeDialog} backdrop="static" keyboard={false}>
        {data && (
          <Modal.Header closeButton>
            <Modal.Title>{data.title}</Modal.Title>
          </Modal.Header>
        )}
        {data && (
          <Modal.Body>
            <p>
              <strong>Director:</strong> {data.director}
            </p>
            <p>
              <strong>Genres:</strong> {data.genres.join(', ')}
            </p>
            <p>{data.plot}</p>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={closeDialog}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TableContentInfo;
