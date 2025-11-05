import React from 'react'
import { isAuthenticated } from '../../Utils/Auth'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({element}) {
  return isAuthenticated() ? element : <Navigate to="/" replace/>
}
