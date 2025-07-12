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
    },
    add: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const ExistingTask = state.itens.find(
        (t) =>
          t.title.toLocaleLowerCase() ===
          action.payload.title.toLocaleLowerCase()
      )

      if (ExistingTask) {
        alert('Task already exists')
      } else {
        const lastTask = state.itens[state.itens.length - 1]
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        }
        state.itens.push(newTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; done: boolean }>
    ) => {
      const taskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (taskIndex >= 0) {
        state.itens[taskIndex].status = action.payload.done
          ? enums.Status.DONE
          : enums.Status.TODO
      }
    }
  }
})

export const { remove, edit, add, changeStatus } = tasksSlice.actions
export default tasksSlice.reducer
