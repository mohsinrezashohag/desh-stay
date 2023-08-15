import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const user = useSelector((state) => state.user.userInfo);

    // If user information is not available, render the children
    // Otherwise, redirect to the home page
    return !user ? (
        <>{children}</>
    ) : (
        <Navigate to="/" replace />
    );
};

export default PublicRoute;
