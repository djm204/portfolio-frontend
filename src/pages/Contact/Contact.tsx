import React, { FunctionComponent } from 'react';
import useContactForm from '../../hooks/customHooks';
import '../../stylesheets/Contact.css';

const Contact: FunctionComponent = () => {
    const onSubmitCompleted = () => {
        alert(`No Backend Yet!
         Name: ${inputs.name}
         Email: ${inputs.email}`);
    }

    const { inputs, handleInputChange, handleSubmit } = useContactForm(onSubmitCompleted);

    return (
        <div className="Contact">
            <h2>Contact Me</h2>
            <div className="Contact__Form__Wrapper">
                <form className="Contact__Form" onSubmit={handleSubmit}>
                    <input
                        onChange={handleInputChange}
                        value={inputs.name}
                        type="text"
                        name="name"
                        placeholder="*Name"
                        required />
                    <input
                        onChange={handleInputChange}
                        value={inputs.email}
                        type="email"
                        placeholder="*Enter email"
                        name="email"
                        required />
                    <input
                        onChange={handleInputChange}
                        value={inputs.phone}
                        type="tel"
                        placeholder="Phone (optional)"
                        name="phone" />
                    <textarea
                        onChange={handleInputChange}
                        name="message"
                        placeholder="*I'd love to hear from you!"
                        required>{inputs.message}</textarea>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;