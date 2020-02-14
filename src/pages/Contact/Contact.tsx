import React, { FunctionComponent } from 'react'
import useContactForm from '../../hooks/customHooks'
import '../../stylesheets/Contact.css'
import InputField from '../../components/InputField'

const Contact: FunctionComponent = () => {
  const onSubmitCompleted = (data: object) => {
    alert(`Successful Submit!`)
  }

  const { inputs, inputErrors, handleInputChange, handleSubmit } = useContactForm(onSubmitCompleted)

  return (
    <div id="Contact" className="Contact">
      <div className="Contact__Form__Wrapper">
        <h2>Contact Me</h2>
        <h4>Do you want to work together?</h4>
        <form className="Contact__Form" onSubmit={handleSubmit}>
          <InputField
            onChangeHandler={handleInputChange}
            value={inputs.name}
            name="name"
            type="text"
            placeholder="*Name"
            required
          />
          <InputField
            onChangeHandler={handleInputChange}
            value={inputs.email}
            type="email"
            placeholder="*Enter email"
            name="email"
            required
          />
          <InputField
            onChangeHandler={handleInputChange}
            value={inputs.phone}
            type="tel"
            placeholder="Phone (optional)"
            name="phone"
          />
          <textarea
            onChange={handleInputChange}
            name="message"
            placeholder="*I'd love to hear from you!"
            required
            value={inputs.message}
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
