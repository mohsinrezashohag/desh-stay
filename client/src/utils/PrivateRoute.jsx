import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.userInfo)

  // If user is authenticated, render the children
  // Otherwise, redirect to the login page
  return user ? <>{children}</> : <Navigate to='/login' replace />
}

export default PrivateRoute
