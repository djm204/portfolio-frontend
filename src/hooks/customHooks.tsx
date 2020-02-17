import React, { useState } from 'react'
import { InputErrorsType, InputsType, validate } from '../helpers/formValidation'
import { post } from '../helpers/api'

const initialState: InputsType = {
  name: '',
  email: '',
  phone: '',
  message: '',
  errors: [],
}

const initialErrors: Array<InputErrorsType> = []

const initialResponseMessage = {
  type: '',
  message: '',
  success: false,
}

const useContactForm = (successCallback: Function) => {
  const [inputs, setInputs] = useState(initialState)
  const [inputErrors, setInputErrors] = useState(initialErrors)
  const [submitting, setSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState(initialResponseMessage)

  const clearInputError = (field: string) => {
    setInputErrors(inputErrors.filter(inputError => inputError.field !== field))
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    let requestData = inputs
    delete requestData.errors
    const request = { url: '/api/sendContactForm', payload: { ...requestData } }

    if (event) event.preventDefault()
    setSubmitting(true)

    const errors = validate(inputs)

    if (errors.length === 0) {
      post(request)
        .then(data => setResponseMessage(data as any))
        .catch(err => setResponseMessage(err))
      setSubmitting(false)
    } else {
      setInputErrors(errors)
      setSubmitting(false)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist()
    clearInputError(event.target.name)
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    responseMessage,
    inputErrors,
    submitting,
  }
}

export default useContactForm
