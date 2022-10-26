import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import UserReducer from './Slices/UserSlice'
import TasksReducer from './Slices/TasksSlice'

const persistConfig = {
  key: '@infnet-task-manager',
  keyPrefix: '',
  storage: storageSession,
}
const rootReducer = combineReducers({
  user: UserReducer,
  tasks: TasksReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
export default store
