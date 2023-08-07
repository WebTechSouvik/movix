import { createSlice, nanoid } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'




const Slice = createSlice({
  name: 'home',
  initialState: {
    url:""
  },
  reducers: {
    imgconfig: {
      reducer: (state, action) => {
        state.url=action.payload
      },
     
    },
  },
})
export const {imgconfig } = Slice.actions;

export default Slice.reducer;