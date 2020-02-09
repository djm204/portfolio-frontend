import React, { useState, useEffect, FunctionComponent } from 'react';
import { ContactInfoRow, ContactInfoRowProps } from './ContactInfoRow'
import { get } from '../../helpers/api';

const Contact: FunctionComponent = () => {
    const [contactInfo, setContactInfo] = useState();

    //ComponentDidMount
    useEffect(() => {
        get({ url: '/contactInfo' })
            .then(contactInfo => setContactInfo(contactInfo))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you would like to reach me feel free to use any of the following:</p>
            <div className="contact-info-wrapper">
                {contactInfo ?
                    contactInfo.map((contact: ContactInfoRowProps) => <ContactInfoRow key={JSON.stringify(contact)} {...contact} />) :
                    null}
            </div>
        </div>
    );
}

export default Contact;