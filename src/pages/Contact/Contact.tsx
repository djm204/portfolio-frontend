import React, { useState, useEffect, FunctionComponent } from 'react';
import { ContactInfoRow, ContactInfoRowProps } from './ContactInfoRow'
import { get } from '../../helpers/api';

type ContactProps = {
    contactInfo: Array<ContactInfoRowProps>
}

const Contact: FunctionComponent<ContactProps> = (props: ContactProps) => {
    const [contactInfo, setContactInfo] = useState();

    //ComponentDidMount
    useEffect(() => {
        get({ url: '/contactInfo' })
            .then(contactInfo => setContactInfo(contactInfo));
    }, []);
    
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you would like to reach me feel free to use any of the following:</p>
            {contactInfo ? contactInfo.map((contact: ContactInfoRowProps) => <ContactInfoRow key={JSON.stringify(contact)} {...contact} />) : null}
        </div>
    );
}

export default Contact;