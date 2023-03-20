import React, { FC, memo } from 'react'
import { ReactNode, useState, useEffect } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}
export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  useEffect(() => {
    hyRequest.get({ url: '/banner' }).then((res) => {
      console.log(res)
      setBanners(res.banners)
    })
  }, [])
  return (
    <div>
      Recommend
      <ul>
        {banners.map((item) => (
          <li key={item.encodeId}>
            {item.typeTitle}
            <img src={item.imageUrl} className="songs" />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default memo(Recommend)
