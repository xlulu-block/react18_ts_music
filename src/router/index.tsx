import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
const routes: RouteObject[] = [
  {
    path: '/',
    // 相当于路由重定向
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  }
]
export default routes
