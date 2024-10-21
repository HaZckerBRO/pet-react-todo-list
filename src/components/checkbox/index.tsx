import { FC, ReactNode, useMemo, CSSProperties } from 'react'
import { CheckOutlined } from '@ant-design/icons'
import s from './index.module.scss'

interface Props {
  checked: boolean
  label: ReactNode
  onChange: () => void
  size: number
}

const Checkbox: FC<Props> = ({ checked, label, onChange, size = 32 }): ReactNode => {
  const sizeStyles: CSSProperties = useMemo(() => {
    return {
      fontSize: size * 0.7,
      width: size,
      height: size
    }
  }, [size])

  return (
    <label className={s.Checkbox} style={{ fontSize: size }}>
      <input className={s.hiddenInput} type='checkbox' checked={checked} onChange={onChange} />
      <div className={s.iconBox} style={sizeStyles}>
        <CheckOutlined size={size} />
      </div>
      {label}
    </label>
  )
}

export { Checkbox }
