import React, { lazy } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import NoHeader from '../Layouts/NoHeader'
import MainLayout from '../Layouts/Main'

const Login = lazy(() => import('../Pages/Login'))
const Register = lazy(() => import('../Pages/Register'))
const Dashboard = lazy(() => import('../Pages/Dashboard'))
const Task = lazy(() => import('../Pages/Task'))
const Profile = lazy(() => import('../Pages/Profile'))
const NotFound = () => {
  const location = useLocation()
  return <Navigate to="/" state={{ from: location }} replace />
}

export default [
  {
    Component: NoHeader,
    routes: [
      { path: '/', Component: Login },
      { path: '/cadastro', Component: Register },
      { path: '*', Component: NotFound },
    ],
  },
  {
    Component: MainLayout,
    routes: [
      { path: '/dashboard', Component: Dashboard },
      { path: '/adicionar-tarefa', Component: Task },
      { path: '/perfil', Component: Profile },
      { path: '*', Component: NotFound },
    ],
  },
]
