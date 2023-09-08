import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import Spinner from '../Spinner/Spinner';

const RedirectToProfile = () => {
  const { isAuth } = useContext<{ isAuth : boolean }>(AuthContext);

  if (isAuth === null) return <div className="flex items-center justify-center min-h-screen"><Spinner /></div>;

  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectToProfile;
