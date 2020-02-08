import React, { useState, useEffect, FunctionComponent } from 'react';
import ContactInfoRow from './ContactInfoRow'
import { ContactInfoRowProps } from './ContactInfoRow';



type ContactProps = {
    contactInfo: Array<ContactInfoRowProps>
}

const Contact: FunctionComponent<ContactProps> = (props: ContactProps) => {
    const [contactInfo, setContactInfo] = useState();

    const renderContactInfo = (contactInfo: Array<ContactInfoRowProps>) =>
        contactInfo.map(contact => <ContactInfoRow key={JSON.stringify(contact)} {...contact} />);

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you would like to reach me feel free to use any of the following:</p>
            {renderContactInfo(contactInfo)}
        </div>
    );
}

export default Contact;