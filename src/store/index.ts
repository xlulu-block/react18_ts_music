import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-pages/recommend/store'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})
// 以下为redux官方写法
type getStateType = typeof store.getState
type getDispatchType = typeof store.dispatch
export type IRootState = ReturnType<getStateType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// 后面这两个其实可以不写，只是为了和useAppSelector引入统一
export const useAppDispatch: () => getDispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
