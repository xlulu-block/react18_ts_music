import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  // 初始化值
  initialState: {
    count: 100
  },
  reducers: {}
})
export default counterSlice.reducer
