import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Index = lazy(() => import('@/pages/Index'))

const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
] as RouteObject[]

export default routes
