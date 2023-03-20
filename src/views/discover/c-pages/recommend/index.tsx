import React, { FC, memo } from 'react'
import { ReactNode, useEffect } from 'react'
import { useAppDispatch } from '@/store'
import { FetchBannersData } from './store'
import Swiper from './c-cpns/swiper'
interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(FetchBannersData())
  }, [])
  return (
    <div>
      <Swiper />
    </div>
  )
}
export default memo(Recommend)
