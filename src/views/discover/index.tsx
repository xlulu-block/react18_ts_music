import React, { FC, memo, Suspense } from 'react'
import type { ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div className="discover">
      <div className="discover-header">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/artist">主播电台</Link>
        <Link to="/discover/djradio">歌手</Link>
        <Link to="/discover/album">新歌上架</Link>
      </div>

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
