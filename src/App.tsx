import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import route from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(route)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}
export default App
