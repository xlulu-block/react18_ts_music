import React, { FC, memo } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
interface IProps {
  children?: ReactNode
}
const NavMenu: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <NavLink to={item.link} key={item.link} className="item">
              {item.title}
            </NavLink>
          )
        })}
      </div>
    </NavWrapper>
  )
}
export default memo(NavMenu)
