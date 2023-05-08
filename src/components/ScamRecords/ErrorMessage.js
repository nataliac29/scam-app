import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const ErrorMessage = ({ text }) => {
  const [open, setOpen] = useState(false)

  ErrorMessage.open = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {text}
      </Alert>
    </Snackbar>
  )
}

export default ErrorMessage
