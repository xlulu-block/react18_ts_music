import React, { FC, memo, useRef } from 'react'
import type { ReactNode, ElementRef } from 'react'
import { SwiperWrapper } from './style'
import { Carousel, Button } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
interface IProps {
  children?: ReactNode
}

const Swiper: FC<IProps> = () => {
  // 绑定banner的ref
  // 将组件的类型传入ref
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )
  const handlePreview = () => {
    console.log('上一页')
    bannerRef.current?.prev()
  }
  const handleNext = () => {
    console.log('下一页')
    bannerRef.current?.next()
  }
  return (
    <SwiperWrapper>
      <Carousel autoplay ref={bannerRef}>
        {banners.map((item, index) => {
          return (
            <div className="contentStyle" key={index}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })}
      </Carousel>
      <Button onClick={handlePreview}>上一页</Button>
      <Button onClick={handleNext}>下一页</Button>
    </SwiperWrapper>
  )
}
export default memo(Swiper)
