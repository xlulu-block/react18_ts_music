import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
const store = configureStore({
  reducer: {
    count: counterReducer
  }
})
export default store
