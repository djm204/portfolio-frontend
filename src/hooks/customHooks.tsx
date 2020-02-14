import React, { useState } from 'react'
import { post } from '../helpers/api'

type InputsType = {
  name: string
  email: string
  phone: string
  message: string
  errors: object
  [propName: string]: any
}
type InputErrors = {
  type: string
  message: string
  field: string
}

const initialState: InputsType = {
  name: '',
  email: '',
  phone: '',
  message: '',
  errors: {},
}

const initialErrors: Array<InputErrors> = []

const useContactForm = (callback: Function) => {
  const [inputs, setInputs] = useState(initialState)
  const [inputErrors, setInputErrors] = useState(initialErrors)

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    let requestData = inputs
    delete requestData.errors
    const request = { url: '/api/sendContactForm', payload: { ...requestData } }

    if (event) event.preventDefault()

    post(request)
      .then(data => callback(data))
      .catch(err => alert(err))
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  const validate = (inputs: InputsType): boolean => {
    const requiredInputs = ['name', 'email', 'message']

    requiredInputs.forEach(input => {
      if (!inputs[input]) {
        inputErrors.push({
          type: 'validation',
          message: input + 'cannot be blank!',
          field: input,
        })
        setInputErrors(inputErrors)
      }
    })
    return true
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    inputErrors,
  }
}

export default useContactForm
