import { useSelector } from 'react-redux';
import { useLogoutQuery } from './core/api';
import { Navigate } from 'react-router-dom';
import { Suspense } from 'react';

export const Logout = () => {
  const token = useSelector((state) => state.auth.token);
  const { isSuccess } = useLogoutQuery(token?.id || '');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isSuccess && <Navigate to="/" />}
    </Suspense>
  );
};
