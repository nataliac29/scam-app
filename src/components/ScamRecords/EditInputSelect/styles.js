import React from 'react'
import styled from 'styled-components'
import { styled as styledM } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

export const InputStyle = styledM(({ ...rest }) => <TextField {...rest} />)({
  width: props => (props.inputWidth || '15vw'),
  fontFamily: 'Roboto',
  fontWeight: 'medium',
  background: 'white',
})

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100vw'};
`

export const Label = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 'medium';
`
