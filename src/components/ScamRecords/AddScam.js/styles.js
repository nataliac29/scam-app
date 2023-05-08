import styled from 'styled-components'

export const Heading = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;
    margin-left: 5vw;
    margin-top: 6vh;
    font-size: 3em;
    color: #e36154;
    text-align:center;
    margin-bottom: 10vh;
`

export const Subject = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;
    margin-top: 6vh;
    font-size: 1.5em;
    color: darkgray;
    text-align:center;
`
export const InputStyle = styled.input`
  display: flex;
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
export const SubmitButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-weight: 'medium';
  padding: 15px 40px 15px 40px; 
  border-radius: 5px; 
  border: none; 
  font-weight: bold; 
  font-size: 1.1rem; 
  color: white;
  background-color: #e7a29c;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  cursor: pointer;
  margin-bottom: 1vh;
  margin-top: 1vh;
  height: 7vh;
    &:hover {
    background-color: red;
  }

`
export const ErrorText = styled.p`
  font-size: .8rem;
  line-height: 1rem;
  color: red;
  width: 300px;
  display: block;
`
export const Box = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 5px;
  width: 80vw;
  height: 10vw;
  align-self: center;
`
export const EventsForm = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  align-items:center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Container = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 17vh;
`

export const RowContainer = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: row;
  width: "100%";
  align-content: 'center';
`
export const Label = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 'medium';
  font-size: 25px;
  letter-spacing:2px;
  line-height: 1em;
  color: black;
  margin-top: 1vh;
  margin-bottom: 1vh;
`
export const GrayContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 'medium';
  background: #EFEFEF;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 3em;

`

export const TableContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 'medium';
  display:flex;
  flex-direction: column;
  width: 1045px;
  margin: auto;

  align-items: center;
  justify-content: center;
  background: white;
`
export const LoadingContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 'medium';
  display:flex;
  flex-direction: column;
  width: 1045px;
  height: 700px;
  margin: auto;
  
  align-items: center;
  justify-content: center;
`
