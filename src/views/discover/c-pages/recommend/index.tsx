import React, { FC, memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Recommoned: FC<IProps> = () => {
  return <div>Recommoned</div>
}
export default memo(Recommoned)
