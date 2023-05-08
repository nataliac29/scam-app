import React from 'react'

import MenuItem from '@material-ui/core/MenuItem'

import { InputStyle, Container, Label } from './styles'

const InputSelect = ({
  value, setValue, placeHolder, label, error, password, options, color, ...rest
}) => (
  <Container {...rest}>
    <Label>{label}</Label>
    <InputStyle
      id="standard-select-currency"
      select
      value={value}
      placeHolder={placeHolder}
      onChange={e => setValue(e.target.value)}
      {...rest}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </InputStyle>
  </Container>

)

export default InputSelect
