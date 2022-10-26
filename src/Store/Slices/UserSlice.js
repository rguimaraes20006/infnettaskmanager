import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => Object.assign(state, action.payload || initialState),
    resetUser: () => initialState,
  },
})
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
