import React from 'react'
import { InputErrorsType } from '../helpers/formValidation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cnames from 'classnames'

type TextAreaFieldProps = {
  onChangeHandler: any
  value: string | number
  name: string
  placeholder: string
  required?: boolean
  error?: InputErrorsType
}

const TextAreaField = (props: TextAreaFieldProps) => {
  const { onChangeHandler, value, name, placeholder, error } = props
  console.log(error)
  return (
    <React.Fragment>
      <textarea
        className={cnames('TextAreaField', { hasError: error != null })}
        onChange={onChangeHandler}
        name={name}
        placeholder={placeholder}
        value={value}
      ></textarea>
      <div className="ErrorMessage">{error ? renderErrorMessage(error) : null}</div>
    </React.Fragment>
  )
}

const renderErrorMessage = (errorMessage: InputErrorsType) => {
  return (
    <React.Fragment>
      <div>
        <FontAwesomeIcon icon={'times-circle'} />
        {errorMessage.message}
      </div>
    </React.Fragment>
  )
}
export default TextAreaField
