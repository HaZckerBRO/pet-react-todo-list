import { FC, ReactNode, useState, useMemo } from 'react'
import cn from 'classnames'
import { CheckboxLabel, Buttons } from './components'
import { TodoItemContext } from './context'
import { Props, ITodoItemContext } from './types'
import s from './index.module.scss'

const TodoItem: FC<Props> = ({ task, setTaskText, onToggleComplete }): ReactNode => {
  const [isEdit, setEdit] = useState(false)

  const contextValue: ITodoItemContext = useMemo(() => {
    return {
      isEdit,
      onToggleComplete,
      setTaskText,
      setEdit,
      task
    }
  }, [isEdit, onToggleComplete, setTaskText, task])

  return (
    <TodoItemContext.Provider value={contextValue}>
      <div className={cn(s.TodoItem, { [s.completed]: task.isCompleted })}>
        <CheckboxLabel />
        <Buttons />
      </div>
    </TodoItemContext.Provider>
  )
}

export { TodoItem }
