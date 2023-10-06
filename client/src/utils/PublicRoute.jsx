import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.user.userInfo)
  return !user ? <>{children}</> : <Navigate to='/' />
}

export default PublicRoute
