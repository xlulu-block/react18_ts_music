import React from 'react'
import { useRoutes } from 'react-router-dom'
import route from '@/router'
function App() {
  return <div className="App">{useRoutes(route)}</div>
}
export default App
