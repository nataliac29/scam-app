import styled from 'styled-components'


export const InputStyle = styled.input`
  ${''}
  border: none;
  padding: 8px;
  margin: 0 0 10px 0;
  background-color: white;
  border: none;
  border-bottom: 2px solid darkgray;
  font-size: 1.1rem;
  color: darkgray;
  transition: .2s;
  outline: none;
  transition: border-bottom .5s smooth;
  &:focus {
    border-bottom: 2px solid #900c3f;
    color: black;
  }
  width: auto;
`
