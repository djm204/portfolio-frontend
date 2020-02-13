import React, { useState } from 'react'

type InputsType = {
  name: string
  email: string
  phone: string
  message: string
}

const initialState: InputsType = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

const useContactForm = (callback: Function) => {
  const [inputs, setInputs] = useState(initialState)

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault()
    }

    callback()
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  }
}

export default useContactForm
