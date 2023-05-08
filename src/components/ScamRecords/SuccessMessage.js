import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const SuccessMessage = ({ text }) => {
  const [open, setOpen] = useState(false)

  SuccessMessage.open = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        {text}
      </Alert>
    </Snackbar>
  )
}

export default SuccessMessage
