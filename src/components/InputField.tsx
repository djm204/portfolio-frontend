import React from 'react'
import { InputErrorsType } from '../helpers/formValidation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cnames from 'classnames'

type InputFieldProps = {
  onChangeHandler: any
  value: string | number
  name: string
  placeholder: string
  required?: boolean
  type: string
  error?: InputErrorsType
}

const InputField = (props: InputFieldProps) => {
  const { onChangeHandler, value, name, placeholder, required, error, type } = props
  return (
    <React.Fragment>
      <input
        className={cnames('InputField', { hasError: error != null })}
        onChange={onChangeHandler}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
      />
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
export default InputField
