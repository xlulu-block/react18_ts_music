import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/download'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
// 推荐
const Recommend = lazy(() => import('@/views/discover/c-pages/recommend'))
const Album = lazy(() => import('@/views/discover/c-pages/album'))
const Djradio = lazy(() => import('@/views/discover/c-pages/djradio'))
const Ranking = lazy(() => import('@/views/discover/c-pages/ranking'))
const Artist = lazy(() => import('@/views/discover/c-pages/artist'))
const Songs = lazy(() => import('@/views/discover/c-pages/songs'))

const routes: RouteObject[] = [
  {
    path: '/',
    // 相当于路由重定向
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      { path: '/discover', element: <Navigate to="/discover/recommend" /> },
      { path: '/discover/recommend', element: <Recommend /> },
      { path: '/discover/album', element: <Album /> },
      { path: '/discover/djradio', element: <Djradio /> },
      { path: '/discover/ranking', element: <Ranking /> },
      { path: '/discover/artist', element: <Artist /> },
      { path: '/discover/songs', element: <Songs /> }
    ]
  },
  {
    path: '/download',
    element: <Download />
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
