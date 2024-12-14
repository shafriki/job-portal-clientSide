import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Provider/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }

    if (user) {
        return children;
    }

    // Redirect to login page and retain the previous location
    return <Navigate to="/login" state={location?.pathname} />;
};

export default PrivateRoute;
