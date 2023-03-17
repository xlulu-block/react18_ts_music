import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  // 初始化值
  initialState: {
    count: 100,
    message: '这厮'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})
export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
