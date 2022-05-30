import React, { useContext } from "react";
import { Route, Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from '../context/auth';

function AuthRoute({ component: Component, ...rest }) {
    const location = useLocation();
    const { user } = useContext(AuthContext);


    return user
        ? <Outlet />
        : <Navigate to="/login" replace state={{ from: location }} />;



}


export default AuthRoute;