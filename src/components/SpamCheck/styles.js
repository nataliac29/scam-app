import React from 'react';

import styled from 'styled-components';

import { styled as MuiStyled} from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import MuiPaper from '@mui/material/Paper';
import MuiButton from '@mui/material/Button';


export const TextArea = styled.textarea`
  border: none;
  background-color: #f2f2f2;
  margin: 15px;
  border-radius: 10px;
  width: 90%;
  font-size: 16px;
  line-height: 1.5;
  transition: all 0.1s ease-in-out;
  box-sizing: border-box;
  outline: none;
  resize: none;
  height: 90%;
  min-height: 200px;

  &:focus {
    outline: none;
    background-color: transparent;
  }

  &::placeholder {
    color: #a1a1a1;
    font-size: 16px;
  }
`;



export const Grid = MuiStyled(MuiGrid)(() => ({
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',

}));

export const InputGrid = MuiStyled(MuiGrid)(() => ({
  width: 'auto',
  display: 'flex',
  justifyContent: 'center',
}));


export const Button = MuiStyled(MuiButton)(() => ({
  height: '3rem',
  marginRight: '20px',
  marginTop: '20px'
}));

export const Paper = MuiStyled(MuiPaper)(() => ({
  width: '100%',
  padding: "20px",
}));

export const Header = styled.div`
  display: flex;
  align-items: start;
  margin: 50px;
  width: 100%;
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: purple;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
`;


export const Response = styled.div`
  padding: 20px;
`;

export const ResponseHeader = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;


export const ResponseText = styled.p`
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: normal;
`

export const ResponsePercentage= styled.span`
  color: #d9534f;
  font-weight: bold;
`

export const ResponseWhy = styled.h3`
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`
export const ResponseReasons = styled.ul`
  color: #333;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 20px;
  text-align: left;
`

export const ResponseReason = styled.li`
  margin-bottom: 5px;

`


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;