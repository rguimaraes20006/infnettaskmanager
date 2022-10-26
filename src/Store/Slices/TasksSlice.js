import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    updateTasks: (state, action) => [...(action.payload || initialState)],
    resetTasks: () => initialState,
  },
})
export const { updateTasks, resetTasks } = tasksSlice.actions

export default tasksSlice.reducer
