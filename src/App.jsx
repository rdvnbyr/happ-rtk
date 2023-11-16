import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { Container } from 'react-bootstrap';
import { Home } from './components/Home';
import { Login } from './auth/Login';
import { Register } from './auth/register';
import { MissingRoute } from './components/MissingRoute';
import { Dashboard } from './components/Dashboard';
import { Unauthorized } from './components/Unauthorized';

const LayoutOutlet = ({ children }) => {
  const isAuthenticated = false;
  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <Container className="my-4">{children}</Container>
    </>
  );
};

const ProtectedOutlet = ({ children }) => {
  const isAuthenticated = false;
  return isAuthenticated ? children : <Unauthorized />;
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
      <LayoutOutlet>
        <Login />
      </LayoutOutlet>
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
      <ProtectedOutlet>
        <LayoutOutlet>
          <Dashboard />
        </LayoutOutlet>
      </ProtectedOutlet>
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
]);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
