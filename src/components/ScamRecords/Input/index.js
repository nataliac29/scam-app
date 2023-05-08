import React from 'react'

import { InputStyle } from './styles'

const Input = ({
  value, setValue, type, placeholder,
}) => (
  <InputStyle
    id={type ? 'standard-password-input' : 'standard-basic'}
    type={type}
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder={placeholder}
  />
)

export default Input
