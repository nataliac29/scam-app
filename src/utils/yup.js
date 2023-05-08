/* eslint-disable no-unused-vars */
import * as yup from 'yup'
import {
  SENDER_REQUIRED,
  SCAM_TYPE_REQUIRED,
  DATE_TIME_REQUIRED,
  MESSAGE_REQUIRED,
} from './errorMessages'

const sender = yup
  .string()
  .required(SENDER_REQUIRED)

const scamType = yup
  .string()
  .required(SCAM_TYPE_REQUIRED)

const uploaded_at = yup
  .date()
  .required(DATE_TIME_REQUIRED)

const message = yup
  .string()
  .required(MESSAGE_REQUIRED)


export const AddYupSchema = yup.object().shape({
  sender,
  scamType,
  uploaded_at,
  message,
})

