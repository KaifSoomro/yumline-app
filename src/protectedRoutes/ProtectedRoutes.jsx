import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = () => {

    const token = localStorage.getItem("token");
    
  return (
    <>
        {
            token ? <Outlet /> : <Navigate to={"/login"}/>
        }
    </>
  )
}

export default ProtectedRoutes