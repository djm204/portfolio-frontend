import React, { FunctionComponent, useEffect } from 'react'
import useContactForm from '../../hooks/customHooks'
import '../../stylesheets/Contact.css'
import InputField from '../../components/InputField'
import TextAreaField from '../../components/TextAreaField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact: FunctionComponent = () => {
  const onSubmitCompleted = (data: object) => {
    console.info(`Successful Submit!`)
  }

  const {
    inputs,
    inputErrors,
    handleInputChange,
    handleSubmit,
    responseMessage,
    submitting,
  } = useContactForm(onSubmitCompleted)

  return (
    <div id="Contact" className="Contact">
      <div className="ContactForm__Wrapper">
        <h2>Contact Me</h2>
        <h4>Do you want to work together?</h4>
        <form className="ContactForm" onSubmit={handleSubmit}>
          <InputField
            onChangeHandler={handleInputChange}
            value={inputs.name}
            name="name"
            type="text"
            placeholder="* Name"
            error={inputErrors.filter(inputError => inputError.field === 'name')[0]}
          />
          <InputField
            onChangeHandler={handleInputChange}
            value={inputs.email}
            type="text"
            placeholder="* Enter email"
            name="email"
            error={inputErrors.filter(inputError => inputError.field === 'email')[0]}
          />
          <InputField
            onChangeHandler={handleInputChange}
            value={inputs.phone}
            type="tel"
            placeholder="Phone (optional)"
            name="phone"
          />
          <TextAreaField
            onChangeHandler={handleInputChange}
            value={inputs.message}
            placeholder="* I'd love to hear from you!"
            name="message"
            error={inputErrors.filter(inputError => inputError.field === 'message')[0]}
          />
          <button type="submit" disabled={inputErrors.length > 0}>
            {submitting ? (
              <div className="spinner">
                <FontAwesomeIcon icon={'spinner'} />
              </div>
            ) : (
              'Submit'
            )}
          </button>
          <div className="ContactForm__SuccessMessage">{responseMessage.message}</div>
        </form>
      </div>
    </div>
  )
}

export default Contact
