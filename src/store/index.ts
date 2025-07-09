import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../store/reducers/tasks'

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
