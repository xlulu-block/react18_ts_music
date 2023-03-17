import React, { FC, memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavMenu from './c-cpns/nav-bar/index'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <NavMenu />
      {/* 只要路由用了懒加载引入，就需要suspense标签过渡 */}
      <Suspense fallback="">
        <div className="discover-main">
          <Outlet />
        </div>
      </Suspense>
    </div>
  )
}
export default memo(Discover)
