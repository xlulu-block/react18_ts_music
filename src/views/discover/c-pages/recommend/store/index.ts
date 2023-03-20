import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service'
export const FetchBannersData = createAsyncThunk(
  'banner',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    console.log(res)
    dispatch(changeBannerData(res.banners))
  }
)
interface IRecommendState {
  banners: any[]
}
const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerData: (state, { payload }) => {
      state.banners = payload
    }
  }
})
export const { changeBannerData } = recommendSlice.actions
export default recommendSlice.reducer
