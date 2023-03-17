import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import route from '@/router'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp
  )
  const dispatch = useAppDispatch()
  const handleChangeMessage = () => {
    // 改变信息
    dispatch(changeMessageAction('message222'))
  }
  return (
    <div className="App">
      <div className="header">
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <span>数量：{count}</span>
      <span>消息：{message}</span>
      <button onClick={handleChangeMessage}>改变信息</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(route)}</div>
      </Suspense>
    </div>
  )
}
export default App
