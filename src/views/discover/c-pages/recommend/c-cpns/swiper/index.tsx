import React, { FC, memo } from 'react'
import type { ReactNode } from 'react'
import { SwiperWrapper } from './style'
import { Carousel } from 'antd'
interface IProps {
  children?: ReactNode
}
const Swiper: FC<IProps> = () => {
  return (
    <SwiperWrapper>
      <Carousel autoplay>
        <div>
          <h3 className="contentStyle">1</h3>
        </div>
        <div>
          <h3 className="contentStyle">2</h3>
        </div>
        <div>
          <h3 className="contentStyle">3</h3>
        </div>
        <div>
          <h3 className="contentStyle">4</h3>
        </div>
      </Carousel>
    </SwiperWrapper>
  )
}
export default memo(Swiper)
