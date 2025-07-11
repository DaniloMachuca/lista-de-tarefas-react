import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      title: 'task1',
      priority: enums.Priority.URGENT,
      status: enums.Status.TODO,
      description: 'description task1'
    },
    {
      id: 2,
      title: 'task2',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.DONE,
      description: 'description task2'
    },
    {
      id: 3,
      title: 'task3',
      priority: enums.Priority.NORMAL,
      status: enums.Status.TODO,
      description: 'description task3'
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((t) => t.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = tasksSlice.actions
export default tasksSlice.reducer
