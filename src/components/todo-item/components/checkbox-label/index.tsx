import { FC, ReactNode, useState, useCallback, useMemo, useContext, ChangeEvent, FocusEvent } from 'react'
import cn from 'classnames'
import { Input } from 'antd'
import { Checkbox } from '@components'
import { TodoItemContext } from '../../context.ts'
import s from './index.module.scss'

const CheckboxLabel: FC = (): ReactNode => {
  const { task, isEdit, setTaskText, onToggleComplete } = useContext(TodoItemContext)

  const [inputValue, setInputValue] = useState(task.text)

  const onCheckboxChange = useCallback(() => {
    return isEdit ? undefined : onToggleComplete()
  }, [isEdit, onToggleComplete])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onInputBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const { value } = e.target

      if (task.text !== value) {
        setTaskText(value)
      }
    },
    [task.text, setTaskText]
  )

  const CheckboxLabel: ReactNode = useMemo(() => {
    if (isEdit) {
      return <Input defaultValue={inputValue} onChange={onInputChange} onBlur={onInputBlur} />
    }

    return <div className={cn(s.text, { [s.completed]: task.isCompleted })}>{inputValue}</div>
  }, [inputValue, isEdit, onInputBlur, task.isCompleted])

  return <Checkbox size={20} label={CheckboxLabel} checked={task.isCompleted} onChange={onCheckboxChange} />
}

export { CheckboxLabel }
