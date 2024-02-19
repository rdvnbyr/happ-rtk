import {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {Header} from '../components/Header';
import {Container} from 'react-bootstrap';
import {Unauthorized} from '../components/Unauthorized';
import {Navigate, useLocation} from 'react-router-dom';

const RootLayout = ({children}) => {
  return <Fragment>{children}</Fragment>;
};

const MainLayout = ({children}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  return (
    <Fragment>
      <Header isAuthenticated={isAuthenticated} />
      <Container className="my-4">{children}</Container>
    </Fragment>
  );
};

const ProtectedLayout = ({children}) => {
  const {isAuthenticated, token} = useSelector(state => state.auth);
  return isAuthenticated && token?.id ? <MainLayout>{children}</MainLayout> : <Unauthorized />;
};

const AuthLayout = ({children}) => {
  const location = useLocation();
  const {isAuthenticated, token} = useSelector(state => state.auth);
  return isAuthenticated && token?.id ? (
    <Navigate to="/" state={{from: location}} replace />
  ) : (
    <Fragment>
      <Header isAuthenticated={isAuthenticated} />
      <Container className="my-4">{children}</Container>
    </Fragment>
  );
};

export {MainLayout, ProtectedLayout, AuthLayout, RootLayout};
