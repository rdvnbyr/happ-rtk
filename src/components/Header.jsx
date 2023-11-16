import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/react.svg';

export function Header({ isAuthenticated }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />{' '}
            RTK-HAPP
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          {isAuthenticated ? (
            <li className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
