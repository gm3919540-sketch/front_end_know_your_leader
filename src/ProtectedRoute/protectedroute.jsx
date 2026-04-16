import React from 'react'
import { Navigate } from 'react-router-dom';

function protectedroute({children}) {
  
    const role = localStorage.getItem("role");
    if(role !="ADMIN"){
        return <Navigate to="/" />;
    }
    return children;
}

export default protectedroute