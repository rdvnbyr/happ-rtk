import {useSelector } from 'react-redux';
import { useLogoutQuery } from './core/api';
import { Navigate, useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  //* RTK-QUERY HOOK FOR LOGOUT
  useLogoutQuery(token?.id);
  
  return token?.id ? (
    <div className="row justify-content-center p-4">
      <div className="text-center mb-4">
        <h1 className="mb-4 text-primary">Logout</h1>
      </div>
      <div className="d-grid my-4">
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate('/');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
