import React, { FC, memo } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import headerData from '@/assets/data/header_titles.json'
interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = () => {
  const handleTitle = (item: any) => {
    if (item.type === 'path') {
      return <Link to={item.link}>{item.title}</Link>
    } else {
      return (
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网易云音乐
          </a>
          <div className="title-list">
            {headerData.map((item) => {
              return (
                <div className="item" key={item.link}>
                  {handleTitle(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          {/* <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          /> */}
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
        <div className="divider"></div>
      </div>
    </HeaderWrapper>
  )
}
export default memo(AppHeader)
