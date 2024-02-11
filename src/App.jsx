import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import { Header } from './components/Header';
import { Container } from 'react-bootstrap';
import { Home } from './components/Home';
import { Login } from './auth/Login';
import { Register } from './auth/register';
import { MissingRoute } from './components/MissingRoute';
import { Dashboard } from './pages/dashboard/Dashboard';
// import { Unauthorized } from './components/Unauthorized';
import { useSelector } from 'react-redux';
import { Logout } from './auth/Logout';
import { ReactDataTable } from './components/ReactDataTable';

const LayoutOutlet = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Container className="my-4">{children}</Container>
    </>
  );
};

// const ProtectedOutlet = ({ children }) => {
//   const { isAuthenticated, token } = useSelector((state) => state.auth);
//   return isAuthenticated && token?.id ? children : <Unauthorized />;
// };

const AuthOutlet = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, token } = useSelector((state) => state.auth);
  return isAuthenticated && token?.id ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    children
  );
};

const BrowserRouter = createBrowserRouter([
  {
    element: (
      <LayoutOutlet>
        <Home />
      </LayoutOutlet>
    ),
    path: '/',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <AuthOutlet>
        <LayoutOutlet>
          <Login />
        </LayoutOutlet>
      </AuthOutlet>
    ),
    path: '/login',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <LayoutOutlet>
        <Register />
      </LayoutOutlet>
    ),
    path: '/register',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <LayoutOutlet>
        <Logout />
      </LayoutOutlet>
    ),
    path: '/logout',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <>
        <LayoutOutlet>
          <Dashboard />
        </LayoutOutlet>
      </>
    ),
    path: '/dashboard',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <LayoutOutlet>
        <h1>Unauthorized</h1>
      </LayoutOutlet>
    ),
    path: '/unauthorized',
    errorElement: <MissingRoute />,
  },
  {
    element: (
      <LayoutOutlet>
        <ReactDataTable />
      </LayoutOutlet>
    ),
    path: '/datatable',
    errorElement: <MissingRoute />,
  },
]);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
