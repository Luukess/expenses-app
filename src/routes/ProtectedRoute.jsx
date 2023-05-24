import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth-context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to='/login' />
    };

    return children ? children : <Outlet />

};

export default ProtectedRoute;