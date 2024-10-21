import { createContext } from 'react'
import { Task } from '@types'
import { ITodoItemContext } from './types'

export const TodoItemContext = createContext<ITodoItemContext>({
  isEdit: false,
  task: {} as Task,
  setEdit: () => '',
  setTaskText: () => '',
  onToggleComplete: () => ''
})
