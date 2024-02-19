import {createBrowserRouter} from 'react-router-dom';
import {Home} from '../components/Home';
import {Login} from '../auth/Login';
import {Register} from '../auth/register';
import {MissingRoute} from '../components/MissingRoute';
import {Dashboard} from '../pages/dashboard/Dashboard';
import {Logout} from '../auth/Logout';
import {ReactDataTable} from '../components/ReactDataTable';
import {AuthLayout, MainLayout, ProtectedLayout} from './layouts';

const BrowserRouter = createBrowserRouter([
  {
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    path: '/',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
    path: '/login',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    ),
    path: '/register',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <MainLayout>
        <Logout />
      </MainLayout>
    ),
    path: '/logout',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <ProtectedLayout>
        <Dashboard />
      </ProtectedLayout>
    ),
    path: '/dashboard',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <MainLayout>
        <ReactDataTable />
      </MainLayout>
    ),
    path: '/datatable',
    errorElement: <MissingRoute />,
  },
]);

export default BrowserRouter;
