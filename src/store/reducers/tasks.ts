import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'task1',
      enums.Priority.URGENT,
      enums.Status.TODO,
      'description task1',
      1
    ),
    new Task(
      'task2',
      enums.Priority.IMPORTANT,
      enums.Status.DONE,
      'description task2',
      2
    ),
    new Task(
      'task3',
      enums.Priority.NORMAL,
      enums.Status.TODO,
      'description task3',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      return state.filter((t) => t.id !== action.payload)
    }
  }
})

export const { remove } = tasksSlice.actions
export default tasksSlice.reducer
