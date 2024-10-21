import { FC, ReactNode, useContext } from 'react'
import cn from 'classnames'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import s from './index.module.scss'
import { TodoItemContext } from '../../context'

const Buttons: FC = (): ReactNode => {
  const { isEdit, setEdit } = useContext(TodoItemContext)

  return (
    <div className={cn(s.Buttons, { [s.hide]: isEdit })} data-component-name='Buttons'>
      <Button type='default' icon={<EditOutlined />} onClick={() => setEdit(true)} />
      <Button type='primary' danger icon={<DeleteOutlined />} />
    </div>
  )
}

export { Buttons }
