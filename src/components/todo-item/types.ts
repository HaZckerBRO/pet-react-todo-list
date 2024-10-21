import { Task } from '@types'

export interface ITodoItemContext {
  isEdit: boolean
  task: Task
  setEdit: (value: boolean) => void
  setTaskText: (text: string) => void
  onToggleComplete: () => void
}

export interface Props {
  task: Task
  setTaskText: (value: string) => void
  onToggleComplete: () => void
}
