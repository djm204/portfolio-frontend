import React from 'react'
import cnames from 'classnames'

type InputFieldProps = {
  onChangeHandler: any
  value: string | number
  name: string
  placeholder: string
  required?: boolean
  type: string
  error?: string
}

const InputField = (props: InputFieldProps) => {
  const { onChangeHandler, value, name, placeholder, required, error, type } = props
  return (
    <React.Fragment>
      <input
        onChange={onChangeHandler}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <div className="Error_Message">{error}</div>
    </React.Fragment>
  )
}

export default InputField
