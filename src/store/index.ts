import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../store/reducers/tasks'
import filterReducer from '../store/reducers/filter'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
