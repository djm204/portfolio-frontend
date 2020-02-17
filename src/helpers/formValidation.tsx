const EMAIL_REGEX: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export type InputErrorsType = {
  type: string
  message: string
  field: string
}

export type InputsType = {
  name: string
  email: string
  phone: string
  message: string
  errors: object
  [propName: string]: any
}

export const validate = (inputs: InputsType): Array<InputErrorsType> => {
  const requiredInputs: Array<string> = ['name', 'email', 'message']
  let inputErrors: Array<InputErrorsType> = []

  requiredInputs.forEach(input => {
    if (!inputs[input]) {
      inputErrors.push({
        type: 'validation',
        message: input + ' cannot be blank!',
        field: input,
      })
    }

    if (!EMAIL_REGEX.test(inputs.email)) {
      inputErrors.push({
        type: 'validation',
        message: 'Please enter a valid email',
        field: 'email',
      })
    }
  })

  if (inputErrors.length > 0) {
    return inputErrors
  } else {
    return inputErrors
  }
}
