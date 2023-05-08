import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField'
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


import {
  Box, RowContainer,
} from './styles'

import useForm from '../../../utils/useForm'
import { AddYupSchema } from '../../../utils/yup'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase'



const Add = () => {
  const [DBError, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {
    state, dispatch, validate, errors, reset
  } = useForm({
    message: '',
    scamType: '',
    uploaded_at: '',
    sender: '',
  }, AddYupSchema)
  

  const messageCollectionRef = collection(db, 'texts');


  const scamTypes = [
    { value: 'Prize', label: 'Prize' },
    { value: 'WrongNumber', label:'Wrong Number'},
    { value: 'AccountSecurity', label: 'Account Security' },
    { value: 'DeliveryIssue', label: 'Delivery Issue' },
  ]
  if (loading) {
    return (
      <div isloading="true">
        <p>Loading</p>
      </div>
    )
  }


  const handleSubmit = async () => {
    console.log(state.uploaded_at)
    if (await validate()) {
      setLoading(true)
      addDoc(messageCollectionRef, {
        message: state.message,
        sender: state.sender,
        scam_type: state.scamType,
        uploaded_at: state.uploaded_at,
      }).then(response => {
        console.log(response);
        setLoading(false)
        reset()
      }).catch(e => {
        setError(e);
    });
    }
  }
  return (
      <Box
        style={{
          display: 'flex', flexDirection: 'column', justifyContent:"space-around", height: "auto", margin: '0px', width: '100%', padding: '10px'
        }}
      sx={{ mt: 1 }}
        noValidate
        autoComplete="off"
      >
        <RowContainer>
        <TextField
          id="outlined-select-currency"
          select
          helperText={errors.scamType ? 'Scam Type required' : null}
          label="Scam Type"
          error={errors.scamType}
          style={{minWidth: "150px"}}
          onChange={val => dispatch({ action: 'scamType', payload: val.target.value })}
          value={state.scamType}
        >
          {scamTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Who sent the message?"
          value={state.sender}
          onChange={val => dispatch({ action: 'sender', payload: val.target.value })}
          helperText={errors.sender ? errors.sender : null}
          error={errors.sender}
          fullWidth
        />
        <TextField
          required
          id="outlined-required"
          label="When was it sent?"
          type="datetime-local"
          onChange={val => dispatch({ action: 'uploaded_at', payload: val.target.value })}
          value={state.uploaded_at}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={errors.uploaded_at ? errors.uploaded_at : null}
          error={errors.uploaded_at}
        />

      </RowContainer>
      <RowContainer>
        <TextField
          required
          id="outlined-required"
          label="Enter Scam Message"
          value={state.message}
          onChange={val => dispatch({ action: 'message', payload: val.target.value })}
          multiline
          helperText={errors.message ? errors.message : null}
          error={errors.message}
          fullWidth
        />


        <Button onClick={handleSubmit} variant="contained" sx={{ marginLeft: '10px', maxHeight:  '60px', alignSelf: 'center'}}>  Add  </Button>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
              </RowContainer>
              
      </Box>
  )
}

export default Add


// addDoc(messageCollectionRef, {
//   message: state.eventname,
//   sender: state.type,
// }).then(response => {
//   console.log(response);
//   setLoading(false)
// }).catch(e => {
//   setError(e);
// });
